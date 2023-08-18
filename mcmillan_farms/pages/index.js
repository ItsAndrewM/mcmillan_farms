import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout/layout";
import layoutStyles from "@/components/layout/layout.module.css";
import Hero from "@/components/hero/hero";
import backgroundImage from "../public/images/farm3.jpg";
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

// https://oishii.com/
//https://dev.to/codeclown/styling-a-native-date-input-into-a-custom-no-library-datepicker-2in

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>McMillan Farms</title>
        <meta name="description" content="McMillan Farms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={layoutStyles.section}>
        <Hero
          imageSrc={backgroundImage}
          header={"Fall Fun at McMillan Farms"}
          description={
            "Celebrate fall at our farm with amazing attractions and pick-your-own produce. Experience nature's beauty and bounty at McMillan Farms!"
          }
          link={"/"}
          linkText={"BOOK YOUR TICKETS ONLINE"}
        />
      </section>
      <section className={layoutStyles.section}>
        <Banner />
      </section>
      <section className={layoutStyles.section}>
        <Cta />
      </section>
      <section className={layoutStyles.section}>
        <CtaLeftColoured />
      </section>
      <section className={layoutStyles.section}>
        <CtaRight />
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
          link={"/"}
          linkText={"Explore our farms"}
        />
      </section>
      <section className={layoutStyles.section}>
        <ContactUsBanner />
      </section>
    </Layout>
  );
}
