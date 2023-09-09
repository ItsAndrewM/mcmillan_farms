import Layout from "@/components/layout/layout";
import layoutStyles from "@/components/layout/layout.module.css";
import contactUsStyles from "../../../styles/contactUs.module.css";
import utilStyles from "../../../styles/utils.module.css";
import { useState } from "react";
import TextHero from "@/components/textHero/texthero";
import HeroActivities from "@/components/heroActivities/heroActivities";
import wedding from "../../../public/images/wedding2.jpg";
import Head from "next/head";
import { weddingData } from "@/data/weddingData";
import styles from "../../../styles/activities.module.css";
import Accordian from "@/components/accordian/accordian";
import { birthdayData } from "@/data/birthdayData";
import CtaLeftColoured from "@/components/ctaLeftColoured/ctaLeftColoured";
import weddingHero from "../../../public/images/wedding.jpg";
import CtaRight from "@/components/ctaRight/ctaRight";
import pettinZoo from "../../../public/images/pettingZoo.jpg";

const Page = () => {
  const [errors, setErrors] = useState({});
  const weddingContent = `McMillan Farms offers a unique outdoor farm wedding venue in the Kelowna area. At 110 acres, we are able to offer a variety of locations virtually anywhere on the farm with hilltop views, open fields, beautiful iconic trees, and forests and even with farm animals grazing in the background.  If you schedule your event in spring, you’ll enjoy blossoms on our plum, apricot and lilac trees. In the fall, surround your ceremony with our pumpkins and bales of hay.  Make sure you take a hayride to any location on the farm for your wedding pictures in the corn field, surrounded by horses or near our famous “Willow Tree”.`;
  const weddingSmall = "THE PERFECT PLACE TO SAY 'I DO'";

  const birthdayContent =
    "Are you looking for a fun and memorable way to celebrate your childs birthday? McMillan Farms offers a unique outdoor farm birthday venue in the Kelowna area. You can book the farm for two hours and enjoy all the activities we have to offer, such as the corn maze, hayride, slingshot, and jump pad. We also provide two picnic tables and additional benches for your guests, as well as a small bag of animal feed for each child to interact with our farm animals. Plus, each child will get to take home a small pumpkin as a souvenir. Our farm is a beautiful setting for your birthday pictures, with hilltop views, open fields, and iconic trees. Whether you choose to have your party in spring or fall, you will be surrounded by nature’s beauty and charm. Book your farm birthday party today and make your childs special day unforgettable!";
  const birthdaySmall = "Nature, animals, and fun: a farm birthday!";

  const heroHeadline =
    "A Farm Wedding Venue in Kelowna That Will Make Your Special Day Unforgettable";
  const heroDesc =
    "You have seen what McMillan Farms can offer for your wedding day. A beautiful and unique outdoor farm venue in Kelowna, with hilltop views, open fields, iconic trees, and farm animals. A variety of locations to choose from, such as the plum orchard, the hay bale area, or the willow tree. A professional and friendly staff that will help you plan and execute your dream farm wedding. A flexible and affordable package that includes the venue rental, tables and chairs, sound system, portable washrooms, and parking. A memorable and unforgettable experience for you and your guests. Now, what are you waiting for? Book your farm wedding today and make your special day happen at McMillan Farms! Contact us to fill out a booking form and secure your date. We have limited availability and high demand, so dont miss this opportunity to have the farm wedding of your dreams! We look forward to hearing from you soon!";
  const heroLink = "/the-farm/events#contact-form";
  const heroLinkText = "Book your farm wedding today!";

  const birthdayHeadline = "Celebrate your childs birthday at the farm!";
  const birthdayDesc =
    "Your child will love having their birthday party at McMillan Farms. They will enjoy all the fun activities we have to offer, such as the corn maze, hayride, slingshot, and jump pad. They will also get to interact with our farm animals and take home a small pumpkin. We provide two picnic tables and additional benches for your guests, as well as a small bag of animal feed for each child. You can book the farm for two hours for only $125, which covers up to 20 guests. If you have more than 20 guests, you will need to pay an extra $8 per person. You can also extend your party for an additional $50 per half hour, subject to availability. Book your farm birthday party today and make your childs special day unforgettable!";
  const birthdayLink = "/the-farm/events#contact-form";
  const birthdayLinkText = "Contact us to plan your farm birthday party!";

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
        const response = await fetch("/api/contact-us", {
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

  const getError = (field) => errors[field];

  return (
    <Layout>
      <Head>
        <title>{"McMillan Farms | Events and Weddings"}</title>
        <meta
          name="description"
          content={
            "McMillan Farms is a unique and beautiful outdoor farm venue in Kelowna, BC. We offer farm weddings, events, and birthday parties for all occasions. Contact us today to book your farm experience!"
          }
          key="desc"
        />
      </Head>
      <section className={layoutStyles.section}>
        <HeroActivities imageSrc={wedding} title={"events"} />
      </section>
      <section className={layoutStyles.section}>
        <TextHero
          tagline={weddingSmall}
          headline={"Weddings"}
          content={weddingContent}
        />
      </section>
      <section className={layoutStyles.section}>
        <Accordian
          arr={weddingData}
          title={"What to expect on your special day"}
        />
      </section>
      <section className={layoutStyles.section}>
        <CtaLeftColoured
          imageSrc={weddingHero}
          headline={heroHeadline}
          desc={heroDesc}
          link={heroLink}
          linkText={heroLinkText}
        />
      </section>
      <section className={layoutStyles.section}>
        <TextHero
          tagline={birthdaySmall}
          headline={"Birthdays"}
          content={birthdayContent}
        />
      </section>
      <section className={layoutStyles.section}>
        <Accordian
          arr={birthdayData}
          title={"Celebrate your child’s birthday at the farm!"}
        />
        <div></div>
      </section>
      <section className={layoutStyles.section}>
        <CtaRight
          imgSrc={pettinZoo}
          headline={birthdayHeadline}
          desc={birthdayDesc}
          link={birthdayLink}
          linkText={birthdayLinkText}
        />
      </section>
      <section className={layoutStyles.section} id="contact-form">
        <div className={contactUsStyles.wrapper}>
          <div className={contactUsStyles.textWrapper}>
            <h1>Get in touch</h1>
            <p>
              If youd like to get in touch, please send us a message below or
              email us at{" "}
              <span className={utilStyles.underline}>
                information@mcmillanfarms.com
              </span>
            </p>
          </div>
          <form
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
                className={`${contactUsStyles.phone} ${contactUsStyles.block}`}
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
                className={`${contactUsStyles.phone} ${contactUsStyles.block}`}
              >
                <label htmlFor="frm-subject">Subject*</label>
                <select
                  id="frm-subject"
                  name="subject"
                  required
                  className={`${utilStyles.lightText} ${
                    getError("subject") ? contactUsStyles.invalid : ""
                  }`}
                >
                  <option
                    disabled={true}
                    value=""
                    className={utilStyles.lightText}
                  >
                    Select a subject
                  </option>
                  <option value="general inquiry">General Inquiry</option>
                  <option value="wedding inquiry">Wedding Inquiry</option>
                  <option value="wedding inquiry">
                    Birthday Party Inquiry
                  </option>
                  <option value="other event inquiry">
                    Other Event Inquiry - be specific in your message
                  </option>
                </select>
                <span className={contactUsStyles.error}>
                  {getError("subject")}
                </span>
              </div>
            </div>
            <div className={`${contactUsStyles.row}`}>
              <div
                className={`${contactUsStyles.phone} ${contactUsStyles.block}`}
              >
                <label htmlFor="frm-date-first">
                  Requested Date - first choice*
                </label>
                <input
                  id="frm-date-first"
                  type="date"
                  name="date-first"
                  required
                  className={`${utilStyles.lightText} ${
                    getError("date-first") ? contactUsStyles.invalid : ""
                  }`}
                />
                <span className={contactUsStyles.error}>
                  {getError("date-first")}
                </span>
              </div>
            </div>
            <div className={`${contactUsStyles.row}`}>
              <div
                className={`${contactUsStyles.phone} ${contactUsStyles.block}`}
              >
                <label htmlFor="frm-date-second">
                  Requested Date - second choice
                </label>
                <input
                  id="frm-date-second"
                  type="date"
                  name="date-second"
                  // required
                  className={`${utilStyles.lightText} ${
                    getError("date-second") ? contactUsStyles.invalid : ""
                  }`}
                />
                <span className={contactUsStyles.error}>
                  {getError("date-second")}
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
                  className={`${utilStyles.lightText} ${
                    getError("date-third") ? contactUsStyles.invalid : ""
                  }`}
                />
                <span className={contactUsStyles.error}>
                  {getError("date-third")}
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
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Page;
