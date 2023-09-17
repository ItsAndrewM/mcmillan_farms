import { seasonalGoods } from "@/data/seasonalGoods";
import { usePathname } from "next/navigation";
import Layout from "@/components/layout/layout";
import layoutStyles from "../../../../../components/layout/layout.module.css";
import productStyles from "../../../../../styles/product.module.css";
import styles from "../../../../../styles/activities.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Recommended from "@/components/recommended/recommended";

const Page = ({ activityData, activityParent }) => {
  const title =
    activityData.name.charAt(0).toUpperCase() + activityData.name.slice(1);
  return (
    <Layout>
      <Head>
        <title>{`McMillan Farms | ${title}`}</title>
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
              href={"/the-farm/seasonal-goods"}
              className={layoutStyles.link}
            >
              Seasonal Goods
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
              width={400}
              height={400}
              key={activityData.image}
              priority={true}
              // loading="lazy"
            />
          </div>
          <div className={styles.textWrapper}>
            <h1>{activityData.name}</h1>
            <small>{activityData.tag}</small>
            <p>{activityData.content}</p>
            <span>
              <Link
                href={"https://www.showpass.com/o/mcmillan-farms/"}
                className={layoutStyles.button}
              >
                Book your tickets now
              </Link>
            </span>
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

export default Page;

export const getStaticPaths = async () => {
  // Return a list of possible value for id
  const keys = Object.keys(seasonalGoods);
  const pathsArr = keys.map((ele) => {
    const a = seasonalGoods[ele].data.map((vals) => {
      return {
        params: { id: "seasonal-goods", slug: `${ele}`, url: `${vals.slug}` },
      };
    });
    return a;
  });
  const fallPaths = pathsArr[0];
  const summerPaths = pathsArr[1];

  return {
    paths: [...fallPaths, ...summerPaths],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const activityData = seasonalGoods[params.slug].data.find((val) => {
    return val.slug === params.url;
  });
  const activityParent = seasonalGoods[params.slug];
  return {
    props: {
      activityData,
      activityParent,
    },
  };
};
