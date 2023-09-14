const sgMail = require("@sendgrid/mail");
const moment = require("moment");
sgMail.setApiKey(process.env.SENDGRID_KEY);

export default function handler(req, res) {
  const { fullName, email, phone, schools, message, number } = req.body;
  const date1 = new Date(req.body["date-first"]);
  const firstDate = moment(date1).format("dddd MMMM D Y");
  const date2 = new Date(req.body["date-second"]);
  const secondDate = moment(date2).format("dddd MMMM D Y");
  const date3 = new Date(req.body["date-third"]);
  const thirdDate = moment(date3).format("dddd MMMM D Y");
  const time1 = req.body["time-first"];
  const firstTime = moment(time1, "hh:mm A").format("hh:mm A");
  const time2 = req.body["time-second"];
  const secondTime = moment(time2, "hh:mm A").format("hh:mm A");
  const time3 = req.body["time-third"];
  const thirdTime = moment(time3, "hh:mm A").format("hh:mm A");
  res.send(200);
  try {
    const msg = {
      to: email, // Change to your recipient | change to information@mcmillanfarms.ca
      from: process.env.SENDGRID_FROM, // Change to your verified sender
      subject: `School Booking from ${schools} - ${fullName}`,
      html: `<div>
      <p>Class Size: ${number}</p>
      <p>Phone number: ${phone}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}
      <ol>
        <li>
          1st Choice
          <ul>
            <li>
              ${firstDate} at ${firstTime}
            </li>
          </ul>
        </li>
        <li>
          2nd Choice
          <ul>
            <li>
              ${secondDate} at ${secondTime}
            </li>
          </ul>
        </li>
        <li>
          3rd Choice
          <ul>
            <li>
              ${thirdDate} at ${thirdTime}
            </li>
          </ul>
        </li>
      </ol>
    </div>`,
      text: message,
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
