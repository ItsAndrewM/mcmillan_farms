import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout/layout";
import layoutStyles from "@/components/layout/layout.module.css";
import Hero from "@/components/hero/hero";
import backgroundImage from "../public/images/pumpkinsHome.jpg";
import hayfield from "../public/images/hayfield.jpg";
import Banner from "@/components/banner/banner";
import Comparison from "@/components/comparison/comparison";
import Cta from "@/components/cta/cta";
import CtaLeft from "@/components/ctaLeft/ctaLeft";
import CtaRight from "@/components/ctaRight/ctaRight";
import HeroBanner from "@/components/heroBanner/heroBanner";
import CtaLeftColoured from "@/components/ctaLeftColoured/ctaLeftColoured";
import HeroCta from "@/components/heroCta/heroCta";
import ContactUsBanner from "@/components/contactUsBanner/contactUsBanner";
import donkey from "../public/images/donkey.jpg";
import hayride from "../public/images/hayride.jpg";

// https://oishii.com/
//https://dev.to/codeclown/styling-a-native-date-input-into-a-custom-no-library-datepicker-2in

export default function Home() {
  const heroHeader = "Fall Fun at McMillan Farms";
  const heroDesc =
    "Celebrate the arrival of fall at our farm and check out all the amazing attractions, seasonal crops, and more! Get lost in the corn maze or enjoy a scenic tour on a hay ride, there is tons to do at McMillan Farms!";
  const heroLink = "https://www.showpass.com/o/mcmillan-farms/";
  const heroLinkText = "Book Tickets now";

  const desc =
    "We are so excited to welcome you back to this fall, where you can enjoy the best of the season with all McMillan Farms has to offer. We have been working hard to prepare so many fun and exciting activities for you. Don’t miss your chance to make some unforgettable memories at McMillan Farms.";
  const headline = "Fall at the farm";
  const link = "/the-farm";
  const linkText = "Discover more about activities and products";

  const rightHeadline = "Experience the Best Hay Ride in Kelowna";
  const rightDesc =
    "See all the farm has to offer on our unique, 100+ acre hay ride tour like where we grow the pumpkins, our summer Sunflower fields and of course, our famous willow tree Don’t miss out this fall, make sure you come down and jump on a hay ride at McMillan Farms";
  const rightLink = "/the-farm/fall-attractions/hay-rides";
  const rightLinkText = "Enjoy a hayride: find out how";

  return (
    <Layout home>
      <Head>
        <title>McMillan Farms</title>
        <meta
          name="description"
          content="A mainstay in your familys tradition, visit McMillan Farms this October for all your family fall fun needs!"
          key="desc"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={layoutStyles.section}>
        <Hero
          imageSrc={backgroundImage}
          header={heroHeader}
          description={heroDesc}
          link={heroLink}
          linkText={heroLinkText}
        />
      </section>
      <section className={layoutStyles.section}>
        <Banner />
      </section>
      <section className={layoutStyles.section}>
        <Cta />
      </section>
      <section className={layoutStyles.section}>
        <CtaLeftColoured
          imageSrc={donkey}
          headline={headline}
          desc={desc}
          link={link}
          linkText={linkText}
        />
      </section>
      <section className={layoutStyles.section}>
        <CtaRight
          headline={rightHeadline}
          desc={rightDesc}
          link={rightLink}
          linkText={rightLinkText}
          imgSrc={hayride}
        />
      </section>
      <section className={layoutStyles.section}>
        <CtaLeft />
      </section>
      <section className={layoutStyles.section}>
        <HeroBanner />
      </section>
      <section className={layoutStyles.section}>
        <HeroCta
          imageSrc={hayfield}
          header={"Rooted in History"}
          link={"/the-farm"}
          linkText={"Explore our farms"}
        />
      </section>
      <section className={layoutStyles.section}>
        <ContactUsBanner />
      </section>
    </Layout>
  );
}
