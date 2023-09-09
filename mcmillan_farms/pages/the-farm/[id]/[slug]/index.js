import Layout from "@/components/layout/layout";
import layoutStyles from "../../../../components/layout/layout.module.css";
import { usePathname } from "next/navigation";
import { data } from "@/data/data";
import Image from "next/image";
import styles from "../../../../styles/activities.module.css";
import Link from "next/link";
import Head from "next/head";
import Recommended from "@/components/recommended/recommended";
import { Suspense } from "react";
import Loading from "./loading";
import utilStyles from "../../../../styles/utils.module.css";
import productStyles from "../../../../styles/product.module.css";
import HeroActivities from "@/components/heroActivities/heroActivities";
import TextHero from "@/components/textHero/texthero";
import { seasonalGoods } from "@/data/seasonalGoods";

const Page = ({ activityData, activityParent }) => {
  if (activityParent.slug !== "seasonal-goods") {
    return (
      <ActivitiesPage
        activityData={activityData}
        activityParent={activityParent}
      />
    );
  } else {
    return (
      <SeasonalPage
        activityData={activityData}
        activityParent={activityParent}
      />
    );
  }
};
const ActivitiesPage = ({ activityData, activityParent }) => {
  return (
    <Layout>
      <Head>
        <title>{activityData.name}</title>
        <meta
          name="description"
          content={`${activityData.content} | McMillan Farms`}
          key="desc"
        />
      </Head>
      <section className={layoutStyles.section}>
        <div id={layoutStyles.breadcrumb}>
          <span>
            <Link href={"/"} className={layoutStyles.link}>
              home
            </Link>
          </span>
          <span>/</span>
          <span>
            <Link href={"/the-farm"} className={layoutStyles.link}>
              The Farm
            </Link>
          </span>
          <span>/</span>
          <span>
            <Link
              href={`/the-farm/${activityParent.slug}`}
              className={layoutStyles.link}
            >
              {activityParent.title}
            </Link>
          </span>
          <span>/</span>
          <span>{activityData.name}</span>
        </div>
      </section>
      <section className={layoutStyles.section}>
        <div className={productStyles.container}>
          <div className={styles.imageWrapper}>
            <Image
              src={activityData.image}
              quality={100}
              alt={""}
              key={activityData.image}
              // priority={true}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrapper}>
            <h1>{activityData.name}</h1>
            <small>{activityData.tag}</small>
            <p>{activityData.content}</p>
          </div>
        </div>
      </section>
      {activityParent.title !== "seasonal goods" && (
        <section className={layoutStyles.section}>
          <Recommended arr={activityParent.data} child={activityData.name} />
        </section>
      )}
    </Layout>
  );
};

const SeasonalPage = ({ activityData, activityParent }) => {
  return (
    <Layout>
      <Head>
        <title>{activityData.name}</title>
        <meta
          name="description"
          content={`${activityData.content} | McMillan Farms`}
          key="desc"
        />
      </Head>
      <section className={layoutStyles.section}>
        <HeroActivities
          imageSrc={activityData.image}
          title={activityData.name}
        />
      </section>
      <section className={layoutStyles.section}>
        <TextHero
          tagline={activityData.small}
          headline={activityData.name}
          content={activityData.content}
        />
      </section>
      <section className={layoutStyles.section}>
        <ul className={`${styles.list} ${utilStyles.flexWrap}`}>
          {seasonalGoods[activityData.slug].data.map((item, index) => {
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

export const getStaticPaths = async () => {
  // Return a list of possible value for id
  const keys = Object.keys(data);
  const pathsArr = keys.map((ele) => {
    const a = data[ele].data.map((vals) => {
      return { params: { id: ele, slug: `${vals.slug}` } };
    });
    return a;
  });
  const fallPaths = pathsArr[0];
  const summerPaths = pathsArr[1];
  const seasonalPaths = pathsArr[2];

  return {
    paths: [...fallPaths, ...summerPaths, ...seasonalPaths],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const activityData = data[params.id].data.find((val) => {
    return val.slug === params.slug;
  });
  const activityParent = data[params.id];
  return {
    props: {
      activityData,
      activityParent,
    },
  };
};

export default Page;
