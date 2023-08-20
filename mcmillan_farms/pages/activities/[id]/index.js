import Layout from "@/components/layout/layout";
import layoutStyles from "@/components/layout/layout.module.css";
import utilStyles from "../../../styles/utils.module.css";
import styles from "../../../styles/activities.module.css";
import { attractionsAndProducts } from "@/data/attractionsAndProducts";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { data } from "@/data/data";
import { usePathname } from "next/navigation";

const Page = ({ attractionData }) => {
  const pathname = usePathname();
  return (
    <Layout>
      <Head>
        <title>{pathname.split("/")[pathname.split("/").length - 1]}</title>
      </Head>
      <section className={layoutStyles.section}>
        <div className={styles.wrapper}>
          <ul className={`${styles.list} ${utilStyles.flexWrap}`}>
            {attractionData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${styles.listItem} ${utilStyles.columnFlex} ${utilStyles.alignCenter} ${utilStyles.marginBottom1} ${utilStyles.width20}`}
                >
                  <Link href={item.link} className={styles.image}>
                    <div className={`${styles.imageWrapper}`}>
                      <Image src={item.image} alt={""} />
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
        </div>
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
