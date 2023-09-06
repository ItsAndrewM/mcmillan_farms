import Accordian from "@/components/accordian/accordian";
import Layout from "@/components/layout/layout";
import layoutStyles from "@/components/layout/layout.module.css";
import { faq } from "@/data/faq";
import styles from "../../styles/faq.module.css";
import Link from "next/link";
import { GiPumpkinLantern } from "react-icons/gi";
import Head from "next/head";

const Page = () => {
  return (
    <Layout>
      <Head>
        <title>{"McMillan Farms | FAQ"}</title>
        <meta
          name="description"
          content="Learn more about McMillan Farms | We have the answers to your Frequently Asked Questions"
          key="desc"
        />
      </Head>
      <section className={layoutStyles.section}>
        <div className={styles.wrapper}>
          <Accordian arr={faq} title={"Frequently Asked Questions"} />
          <div className={styles.container}>
            <div className={styles.box}>
              <div>
                <GiPumpkinLantern width={50} size={50} />
              </div>
              <div className={styles.textWrapper}>
                <p>Can't find an answer to your question?</p>
                <small>
                  Contact us, and we'll do our best to answer any of your
                  queries.
                </small>
              </div>
            </div>
            <div>
              <span>
                <Link href={"/contact-us"} className={layoutStyles.link}>
                  Contact Us
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Page;
