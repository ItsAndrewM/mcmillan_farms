import Layout from "@/components/layout/layout";
import layoutStyles from "@/components/layout/layout.module.css";
import utilStyles from "../../../styles/utils.module.css";
import styles from "../../../styles/activities.module.css";
import { attractionsAndProducts } from "@/data/attractionsAndProducts";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { data } from "@/data/data";
import { Suspense } from "react";
import Loading from "./loading";
import HeroActivities from "@/components/heroActivities/heroActivities";
import TextHero from "@/components/textHero/texthero";

const Page = ({ attractionData }) => {
  const title =
    attractionData.title.charAt(0).toUpperCase() +
    attractionData.title.slice(1);
  return (
    <Layout>
      <Head>
        <title>McMillan Farms |{title}</title>
        <meta
          name="description"
          content={`${attractionData.content} | McMillan Farms`}
          key="desc"
        />
      </Head>
      <section className={layoutStyles.section}>
        <HeroActivities
          imageSrc={attractionData.image}
          title={attractionData.title}
        />
      </section>
      <section className={layoutStyles.section}>
        <TextHero
          tagline={attractionData.small}
          headline={attractionData.title}
          content={attractionData.content}
        />
      </section>
      <section className={layoutStyles.section}>
        <ul className={`${styles.list} ${utilStyles.flexWrap}`}>
          {attractionData.data.map((item, index) => {
            return (
              <li
                key={index}
                className={`${styles.listItem} ${utilStyles.columnFlex} ${utilStyles.alignCenter} ${utilStyles.marginBottom1} ${utilStyles.width20}`}
              >
                <Link href={item.link} className={styles.image}>
                  <div className={`${styles.imageWrapper}`}>
                    <Image src={item.image} alt={""} key={item.image} />
                  </div>
                </Link>
                <span>
                  <h3>
                    <Link
                      href={item.link}
                      className={`${utilStyles.capitalize} ${layoutStyles.link}`}
                    >
                      {item.name}
                    </Link>
                  </h3>
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};

export default Page;

export const getStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = attractionsAndProducts.map((vals) => {
    return { params: { id: vals.slug } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const attractionData = data[params.id];
  return {
    props: {
      attractionData,
    },
  };
};
