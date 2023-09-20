import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Script from "next/script";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import { useRouter } from "next/router";

const name = "Andrew";
export const siteTitle = "McMillan Farms";

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="McMillan Farms" />
        <meta
          property="og:image"
          content={`https://mcmillanfarms.xyz/api/og`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="google-analytics-container">
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C4HJJ32CM8"
        ></Script>
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-C4HJJ32CM8');`}
        </Script>
      </div>

      <NavBar />
      <main className={styles.main}>{children}</main>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/" className={styles.smallLink}>
            ← Back to home
          </Link>
        </div>
      )} */}
      <Footer />
    </div>
  );
};

export default Layout;
