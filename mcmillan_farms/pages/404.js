import Hero from "@/components/hero/hero";
import Layout from "@/components/layout/layout";
import backgroundImage from "../public/images/pumpkins6.jpg";
import layoutStyles from "../components/layout/layout.module.css";
import Head from "next/head";

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>McMillan Farms | 404</title>
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
          header={"404 - Page Not Found"}
          description={
            "Lost? Head back to the farm and get your next adventure started."
          }
          link={"/"}
          linkText={"Back to the farm"}
        />
      </section>
    </Layout>
  );
}
