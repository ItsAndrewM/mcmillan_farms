// "use server";

import contactUsStyles from "../../styles/contactUs.module.css";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/careers.module.css";
import { useState } from "react";
import { utapi } from "uploadthing/server";

const CareerUpload = () => {
  const [errors, setErrors] = useState({});
  const [resume, setResume] = useState();
  const getError = (field) => errors[field];
  const [value, setValue] = useState("Select option...");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = e.target.checkValidity();
    const form = e.target;
    const formData = new FormData(e.currentTarget);
    const validationMessages = Array.from(formData.keys()).reduce(
      (acc, key) => {
        acc[key] = form.elements[key].validationMessage;
        return acc;
      },
      {}
    );
    if (isValid) {
      // here you do what you need to do if is valid
      const data = Array.from(formData.keys()).reduce((acc, key) => {
        acc[key] = formData.get(key);
        return acc;
      }, {});
      // const data = new FormData();
      // data.append("file", e.currentTarget.file);
      // data.append("firstName", e.currentTarget.firstName);
      // data.append("lastName", e.currentTarget.lastName);
      // data.append("email", e.currentTarget.email);
      // data.append("phone", e.currentTarget.phone);
      // data.append("message", e.currentTarget.message);
      // const newData = new URLSearchParams(data);
      // console.log(newData);
      try {
        // const uploadResponse = await utapi.uploadFiles(files);
        // console.log(uploadResponse);
        const response = await fetch("/api/careers", {
          method: "post",
          body: new URLSearchParams(data),
        });

        if (!response.ok) {
          throw new Error(`Invalid response: ${response.status}`);
        }
        alert("Thanks for contacting us, we will get back to you soon!");
      } catch (err) {
        console.error(err);
        alert("We can't submit the form, try again later?");
      }
    } else {
      setErrors(validationMessages);
    }
  };
  return (
    <div
      className={`${contactUsStyles.wrapper} ${styles.box}`}
      style={{ gap: 0 }}
    >
      {" "}
      <div className={`${contactUsStyles.textWrapper} ${styles.text}`}>
        <h1>Careers</h1>
        <p>
          Are you looking for a fun and rewarding job that lets you enjoy the
          fresh air, interact with animals, and meet new people? If so, you
          might be interested in working at Mcmillan Farms, a family-owned and
          operated farm that offers a variety of activities and products for the
          community.
        </p>
        <p>
          As a farm worker, you will be responsible for helping with the daily
          operations of the farm, such as harvesting, planting, weeding,
          feeding, and caring for the animals. You will also assist with the
          customer service, such as greeting visitors, answering questions, and
          selling products. You will work in a team environment and learn new
          skills along the way.
        </p>
        <p>
          No experience is necessary to apply for this job. All you need is a
          positive attitude, a willingness to learn, and a love for animals. You
          should also be able to lift heavy objects, stand and walk for long
          periods of time, and work outdoors in various weather conditions.
        </p>
        <p>
          If this sounds like the perfect job for you, don’t hesitate to apply
          today. You can visit fill out the below form, upload a resume or cover
          letter. We look forward to hearing from you soon!
        </p>
      </div>
      <form
        className={`${contactUsStyles.container}`}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className={`${contactUsStyles.row}`}>
          <div className={`${contactUsStyles.name} ${contactUsStyles.block}`}>
            <label htmlFor="frm-firstName">First Name*</label>
            <input
              id="frm-firstName"
              type="text"
              name="firstName"
              autoComplete="given-name"
              placeholder="Enter first name"
              required
              className={getError("firstName") ? contactUsStyles.invalid : ""}
            />
            <span className={contactUsStyles.error}>
              {getError("firstName")}
            </span>
          </div>
          <div className={`${contactUsStyles.name} ${contactUsStyles.block}`}>
            <label htmlFor="frm-lastName">Last Name*</label>
            <input
              id="frm-lastName"
              type="text"
              name="lastName"
              autoComplete="family-name"
              placeholder="Enter last name"
              required
              className={getError("lastName") ? contactUsStyles.invalid : ""}
            />
            <span className={contactUsStyles.error}>
              {getError("lastName")}
            </span>
          </div>
        </div>
        <div className={`${contactUsStyles.row}`}>
          <div className={`${contactUsStyles.name} ${contactUsStyles.block}`}>
            <label htmlFor="frm-phone">Phone*</label>
            <input
              id="frm-phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="Enter phone number"
              required
              className={getError("phone") ? contactUsStyles.invalid : ""}
            />
            <span className={contactUsStyles.error}>{getError("phone")}</span>
          </div>
          <div className={`${contactUsStyles.email} ${contactUsStyles.block}`}>
            <label htmlFor="frm-email">Email*</label>
            <input
              id="frm-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Enter email address"
              required
              className={getError("email") ? contactUsStyles.invalid : ""}
            />
            <span className={contactUsStyles.error}>{getError("email")}</span>
          </div>
        </div>
        <div className={`${contactUsStyles.message} ${contactUsStyles.block}`}>
          <label htmlFor="frm-message">Message*</label>
          <textarea
            id="frm-message"
            rows="6"
            name="message"
            required
            className={getError("message") ? contactUsStyles.invalid : ""}
          ></textarea>
          <span className={contactUsStyles.error}>{getError("message")}</span>
        </div>
        <div className={`${contactUsStyles.row}`}>
          <div className={`${contactUsStyles.name} ${contactUsStyles.block}`}>
            <label>Upload file*</label>
            <input
              name="file"
              type="file"
              required
              multiple
              accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf"
              className={getError("file") ? contactUsStyles.invalid : ""}
            />
            <span className={contactUsStyles.error}>{getError("file")}</span>
          </div>
        </div>

        {/* <UploadDropzone
              className={styles.uploadDropZone}
              endpoint="imageUploader"
              // endpoint="uploadthing"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                alert("Upload Completed");
              }}
              onUploadError={(error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
              onUploadBegin={(name) => {
                // Do something once upload begins
                console.log("Uploading: ", name);
              }}
            /> */}

        <div className={`${contactUsStyles.button} ${contactUsStyles.block}`}>
          <button type="submit" className={contactUsStyles.buttonInput}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareerUpload;
