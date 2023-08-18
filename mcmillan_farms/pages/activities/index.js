import Image from "next/image";
import { activityItems } from "../../data/activityItems";
import Layout from "@/components/layout/layout";
import layoutStyles from "@/components/layout/layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import style from "../../styles/activities.module.css";
import Link from "next/link";

const Page = () => {
  return (
    <Layout>
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
