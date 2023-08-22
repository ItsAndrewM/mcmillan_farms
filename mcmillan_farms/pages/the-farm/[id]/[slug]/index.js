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
import productStyles from "../../../../styles/product.module.css";

const Page = ({ activityData, activityParent }) => {
  return (
    <Layout>
      <Head>
        <title>{activityData.name}</title>
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
            <Link href={"/activities"} className={layoutStyles.link}>
              Activities
            </Link>
          </span>
          <span>/</span>
          <span>
            <Link
              href={`/activities/${activityParent.title}`}
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
              priority={true}
            />
          </div>
          <div className={styles.textWrapper}>
            <h1>{activityData.name}</h1>
            <small>{activityData.tag}</small>
            <p>{activityData.content}</p>
          </div>
        </div>
      </section>
      <section className={layoutStyles.section}>
        <Suspense fallback={<Loading />}>
          <Recommended arr={activityParent.data} child={activityData.name} />
        </Suspense>
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
