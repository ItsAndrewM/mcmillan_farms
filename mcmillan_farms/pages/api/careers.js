const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_KEY);
import { utapi } from "uploadthing/server";

export default async function handler(req, res) {
  const { fullName, email, phone, subject, message } = req.body;
  //   const response = await utapi.uploadFiles(file);
  res.send(200);
  try {
    const msg = {
      to: "mcmillanfarmskelowna@gmail.com", // Change to your recipient | change to information@mcmillanfarms.ca
      from: process.env.SENDGRID_FROM, // Change to your verified sender
      subject: `${subject} - ${fullName}`,
      text: `${email} - ${phone} - ${message}`,
    };
    sgMail
      .send(msg)
      .then((data) => {
        return data[0];
      })
      .then((data) => {
        console.log("email sent");
        res.status(200).end();
      })
      .catch((error) => {
        throw new Error(error);
      });
  } catch (error) {
    console.log("email not sent");
    res.status(500).end();
  }
}
