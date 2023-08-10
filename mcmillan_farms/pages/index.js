import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout/layout";
import layoutStyles from "@/components/layout/layout.module.css";
import Hero from "@/components/hero/hero";
import backgroundImage from "../public/images/farm3.jpg";
import Banner from "@/components/banner/banner";
import Comparison from "@/components/comparison/comparison";
import Cta from "@/components/cta/cta";

// https://oishii.com/

export default function Home() {
  return (
    <Layout>
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
            "Celebrate fall at our farm with amazing attractions and pick-your-own produce. Experience nature’s beauty and bounty at McMillan Farms!"
          }
          link={"/"}
          linkText={"BOOK YOUR TICKETS ONLINE"}
        />
      </section>
      <section className={layoutStyles.section}>
        <Banner />
      </section>
      <section className={layoutStyles.section}>
        <Comparison />
      </section>
      <section className={layoutStyles.section}>
        <Cta />
      </section>
    </Layout>
  );
}
