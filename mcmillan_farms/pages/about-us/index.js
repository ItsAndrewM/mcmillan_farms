import Layout from "@/components/layout/layout";
import layoutStyles from "@/components/layout/layout.module.css";
import styles from "../../styles/aboutUs.module.css";
import HeroTitle from "@/components/heroTitle/heroTitle";
import farm from "../../public/images/farm1.jpg";
import Head from "next/head";
import TextHero from "@/components/textHero/texthero";
import CtaLeftColoured from "@/components/ctaLeftColoured/ctaLeftColoured";
import wedding from "../../public/images/wedding3.jpg";
import CtaRight from "@/components/ctaRight/ctaRight";
import hayride from "../../public/images/hayfield.jpg";
import { GiPumpkinLantern } from "react-icons/gi";
import Link from "next/link";
import faqStyles from "../../styles/faq.module.css";

const Page = () => {
  const content =
    "We are a family-owned farm in Kelowna, BC, offering fun and educational experiences for all ages. McMillan Farms was started in 1950 and has grown to produce thousands of pumpkins, gourds, and corn every year. Come and enjoy our hayrides, corn maze, petting zoo, and more. McMillan Farms is your destination for farm-fresh fun";
  return (
    <Layout>
      <Head>
        <title>McMillan Farms | About Us</title>
        <meta name="description" content={content} key="desc" />
      </Head>
      <section className={layoutStyles.section}>
        <div className={styles.wrapper}>
          <HeroTitle
            imageSrc={farm}
            title={"About Us"}
            altText={"farmer riding a tractor in a field pulling a trailer"}
          />
        </div>
      </section>
      <section className={layoutStyles.section} id="our-farm">
        <TextHero
          tagline={"The Farm"}
          headline={"About Us"}
          content={content}
        />
      </section>
      <section className={layoutStyles.section} id="history">
        <CtaRight
          headline={"Rich in History"}
          desc={
            "In 1950, Grandparents Ross and Jean McMillan purchased the farm from the Wirche family. The farm was already operating a small dairy and contained some of Kelowna's earliest European settlement history. After years of hard work with son Jim, they built up one of the largest dairy operations in the Kelowna area, producing milk for the Kelowna Creamery and eventually North Okanagan Creamery Association (NOCA). Ross and Jean retired from the dairy business in the early 1970's, but Ross and Jim continued the operation as a hay farm."
          }
          link={""}
          linkText={""}
          imgSrc={hayride}
          altText={"hayfield with haybales, next to cornmaze"}
        />
      </section>
      <section className={layoutStyles.section} id="meet-the-farmers">
        <CtaLeftColoured
          imageSrc={wedding}
          headline={"Meet the Farmers"}
          desc={
            "In 2004, Ron, his wife Colleen and their 4 children all started the McMillan Pumpkin Patch with only a 100 pumpkins to sell to neighbours. Since then, they have continuously expanded the business which now produces several thousand pumpkins and gourds each year, from almost 24 different varieties. In 2008, the family replanted a portion of the farms 18 acre hayfield with corn, to create one of Kelowna's best corn maze's."
          }
          link={""}
          linkText={""}
          altText={"mcmillan family standing shoulder to shoulder at a wedding"}
        />
      </section>
      <section className={layoutStyles.section}>
        <div className={faqStyles.wrapper}>
          <div className={faqStyles.container}>
            <div className={faqStyles.box}>
              <div>
                <GiPumpkinLantern width={50} size={50} />
              </div>
              <div className={faqStyles.textWrapper}>
                <p>Have a question?</p>
                <small>
                  We’re happy to answer any questions you may have about our
                  products or any other general inquiries. Send us a note!
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
