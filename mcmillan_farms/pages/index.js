import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout/layout";
import layoutStyles from "@/components/layout/layout.module.css";
import Hero from "@/components/hero/hero";
import backgroundImage from "../public/images/farm1.jpg";

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
        <Hero imageSrc={backgroundImage} />
      </section>
    </Layout>
  );
}
