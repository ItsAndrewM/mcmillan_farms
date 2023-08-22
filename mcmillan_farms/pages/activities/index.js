import Image from "next/image";
import { activityItems } from "../../data/activityItems";
import Layout from "@/components/layout/layout";
import layoutStyles from "@/components/layout/layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import style from "../../styles/activities.module.css";
import Link from "next/link";
import Head from "next/head";
import HeroActivities from "@/components/heroActivities/heroActivities";
import pumpkinField from "../../public/images/pumpkinField.jpg";
import TextHero from "@/components/textHero/texthero";

const Page = () => {
  const tagLine = "EXPERIENCE THE BEST OF THE FARM";
  const headline = "DISCOVER THE MAGIC OF MCMILLAN FARMS";
  const content =
    "McMillan Farms is not just a farm, it’s a destination. You can enjoy a range of activities that will delight your senses and challenge your skills. Try our corn maze and sunflower maze, pick your perfect pumpkin, launch some gourds, or hop on a hayride. You can also browse our market for fresh and delicious products, or book our venue for your wedding or school outing.";
  return (
    <Layout>
      <Head>
        <title>Activities</title>
      </Head>
      <section className={layoutStyles.section}>
        <HeroActivities imageSrc={pumpkinField} title={"Activities"} />
      </section>
      <section className={layoutStyles.section}>
        <TextHero tagline={tagLine} headline={headline} content={content} />
      </section>
      <section className={layoutStyles.section}>
        <div className={style.wrapper}>
          <ul className={style.list}>
            {activityItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${style.listItem} ${utilStyles.columnFlex} ${utilStyles.alignCenter} ${utilStyles.marginBottom1}`}
                >
                  <Link href={item.link} className={style.image}>
                    <div className={`${style.imageWrapper}`}>
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
