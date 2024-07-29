import Layout from "@/components/layout/layout";
import layoutStyles from "../../../components/layout/layout.module.css";
import { useState } from "react";
import styles from "../../../styles/activities.module.css";
import contactUsStyles from "../../../styles/contactUs.module.css";
import utilStyles from "../../../styles/utils.module.css";
import Head from "next/head";
import Accordian from "@/components/accordian/accordian";
import { schooBooking } from "@/data/schoolBooking";
import { elementarySchools } from "@/data/elementarySchools";
import SearchableDropdown from "@/components/searchableDropdown/searchableDropdown";

const Page = () => {
	const [errors, setErrors] = useState({});
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
			try {
				const response = await fetch("/api/school-booking", {
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
		<Layout>
			<Head>
				<title>{"McMillan Farms | School Bookings"}</title>
				<meta
					name="description"
					content={
						"Are you looking for a fun and educational field trip for your students? McMillan Farms offers a variety of school programs that are suitable for all ages and curriculum. You can book a tour of the farm, enjoy a hayride, learn about the history and culture of farming, and even pick your own pumpkins."
					}
					key="desc"
				/>
			</Head>
			<section className={layoutStyles.section}>
				<div className={contactUsStyles.wrapper} style={{ gap: 0 }}>
					<div className={contactUsStyles.textWrapper}>
						<h1>Book a School Trip to McMillan Farms</h1>
						<small>
							Experience the joy of farming and learning at McMillan Farms
						</small>
						<p>
							If you are looking for a fun and educational field trip for your
							students, look no further than McMillan Farms.
						</p>
						<p>
							For more information or to book your class trip today fill out our
							contact form below or email us at{" "}
							<span className={utilStyles.underline}>
								information@mcmillanfarms.com
							</span>
						</p>
					</div>
					<div className={contactUsStyles.wrapper}>
						<Accordian title={"School Bookings for 2024"} arr={schooBooking} />
					</div>
					{/* <form
            className={`${contactUsStyles.container}`}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={`${contactUsStyles.row}`}>
              <div
                className={`${contactUsStyles.name} ${contactUsStyles.block}`}
              >
                <label htmlFor="frm-fullName">Full Name*</label>
                <input
                  id="frm-fullName"
                  type="text"
                  name="fullName"
                  autoComplete="given-name"
                  placeholder="Enter full name"
                  required
                  className={
                    getError("fullName") ? contactUsStyles.invalid : ""
                  }
                />
                <span className={contactUsStyles.error}>
                  {getError("fullName")}
                </span>
              </div>
              <div
                className={`${contactUsStyles.email} ${contactUsStyles.block}`}
              >
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
                <span className={contactUsStyles.error}>
                  {getError("email")}
                </span>
              </div>
            </div>
            <div className={`${contactUsStyles.row}`}>
              <div
                className={`${contactUsStyles.name} ${contactUsStyles.block}`}
              >
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
                <span className={contactUsStyles.error}>
                  {getError("phone")}
                </span>
              </div>
              <div
                className={`${contactUsStyles.name} ${contactUsStyles.block}`}
              >
                <label htmlFor="frm-number">Class Size*</label>
                <input
                  id="frm-number"
                  type="number"
                  name="number"
                  min="1"
                  placeholder="Enter class size"
                  required
                  className={getError("number") ? contactUsStyles.invalid : ""}
                />
                <span className={contactUsStyles.error}>
                  {getError("number")}
                </span>
              </div>
            </div>
            <div className={`${contactUsStyles.row}`}>
              <div
                className={`${contactUsStyles.name} ${contactUsStyles.block}`}
              >
                <label htmlFor="frm-schools">School*</label>
                <select
                  id="frm-schools"
                  name="schools"
                  required
                  defaultValue={"Select a SD23 school"}
                  className={`${utilStyles.lightText} ${
                    getError("schools") ? contactUsStyles.invalid : ""
                  }`}
                >
                  <option
                    disabled={true}
                    value="Select a SD23 school"
                    className={utilStyles.lightText}
                  >
                    Select a SD23 school
                  </option>
                  {elementarySchools.map((school) => {
                    return (
                      <option key={school.id} value={school.name}>
                        {school.name}
                      </option>
                    );
                  })}
                </select> */}
					{/* <SearchableDropdown
                  options={elementarySchools}
                  label="name"
                  id="frm-schools"
                  selectedVal={value}
                  handleChange={(val) => setValue(val)}
                /> */}
					{/* <span className={contactUsStyles.error}>
                  {getError("schools")}
                </span>
              </div>
            </div>
            <div className={`${contactUsStyles.row}`}>
              <div
                className={`${contactUsStyles.name} ${contactUsStyles.block}`}
              >
                <label htmlFor="frm-date-first">
                  Requested Date - first choice*
                </label>
                <input
                  id="frm-date-first"
                  type="date"
                  name="date-first"
                  required
                  className={`${utilStyles.lightText} ${styles.frmDate} ${
                    getError("date-first") ? contactUsStyles.invalid : ""
                  }`}
                />
                <span className={contactUsStyles.error}>
                  {getError("date-first")}
                </span>
              </div>
              <div
                className={`${contactUsStyles.name} ${contactUsStyles.block}`}
              >
                <label htmlFor="frm-time-first">
                  Requested Time - first choice*
                </label>
                <input
                  id="frm-time-first"
                  type="time"
                  name="time-first"
                  min="9:00"
                  max="16:00"
                  required
                  className={`${utilStyles.lightText} ${styles.frmDate} ${
                    getError("time-first") ? contactUsStyles.invalid : ""
                  }`}
                />
                <span className={contactUsStyles.error}>
                  {getError("time-first")}
                </span>
              </div>
            </div>
            <div className={`${contactUsStyles.row}`}>
              <div
                className={`${contactUsStyles.name} ${contactUsStyles.block}`}
              >
                <label htmlFor="frm-date-second">
                  Requested Date - second choice
                </label>
                <input
                  id="frm-date-second"
                  type="date"
                  name="date-second"
                  // required
                  className={`${utilStyles.lightText} ${styles.frmDate} ${
                    getError("date-second") ? contactUsStyles.invalid : ""
                  }`}
                />
                <span className={contactUsStyles.error}>
                  {getError("date-second")}
                </span>
              </div>
              <div
                className={`${contactUsStyles.name} ${contactUsStyles.block}`}
              >
                <label htmlFor="frm-time-second">
                  Requested Time - second choice
                </label>
                <input
                  id="frm-time-second"
                  type="time"
                  name="time-second"
                  min="9:00"
                  max="16:00"
                  className={`${utilStyles.lightText} ${styles.frmDate} ${
                    getError("time-second") ? contactUsStyles.invalid : ""
                  }`}
                />
                <span className={contactUsStyles.error}>
                  {getError("time-second")}
                </span>
              </div>
            </div>
            <div className={`${contactUsStyles.row}`}>
              <div
                className={`${contactUsStyles.phone} ${contactUsStyles.block}`}
              >
                <label htmlFor="frm-date-third">
                  Requested Date - third choice
                </label>
                <input
                  id="frm-date-third"
                  type="date"
                  name="date-third"
                  // required
                  className={`${utilStyles.lightText} ${styles.frmDate} ${
                    getError("date-third") ? contactUsStyles.invalid : ""
                  }`}
                />
                <span className={contactUsStyles.error}>
                  {getError("date-third")}
                </span>
              </div>
              <div
                className={`${contactUsStyles.name} ${contactUsStyles.block}`}
              >
                <label htmlFor="frm-time-second">
                  Requested Time - third choice
                </label>
                <input
                  id="frm-time-third"
                  type="time"
                  name="time-third"
                  min="9:00"
                  max="16:00"
                  className={`${utilStyles.lightText} ${styles.frmDate} ${
                    getError("time-third") ? contactUsStyles.invalid : ""
                  }`}
                />
                <span className={contactUsStyles.error}>
                  {getError("time-third")}
                </span>
              </div>
            </div>
            <div
              className={`${contactUsStyles.message} ${contactUsStyles.block}`}
            >
              <label htmlFor="frm-message">Message*</label>
              <textarea
                id="frm-message"
                rows="6"
                name="message"
                required
                className={getError("message") ? contactUsStyles.invalid : ""}
              ></textarea>
              <span className={contactUsStyles.error}>
                {getError("message")}
              </span>
            </div>
            <div
              className={`${contactUsStyles.button} ${contactUsStyles.block}`}
            >
              <button type="submit" className={contactUsStyles.buttonInput}>
                Submit
              </button>
            </div>
          </form> */}
				</div>
			</section>
		</Layout>
	);
};

export default Page;
