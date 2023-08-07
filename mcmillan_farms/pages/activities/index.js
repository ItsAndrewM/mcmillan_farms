import Image from "next/image";
import { activityItems } from "../../data/activityItems";
import Layout from "@/components/layout/layout";
import style from "../../styles/activities.module.css";
import Link from "next/link";

const Page = () => {
  return (
    <Layout>
      <div className={style.wrapper}>
        <ul className={style.list}>
          {activityItems.map((item, index) => {
            return (
              <li key={index} className={`${style.listItem}`}>
                <Link href={item.link}>
                  <div className={`${style.imageWrapper}`}>
                    <Image src={item.image} />
                  </div>
                  <div>
                    <small>{item.name}</small>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Page;
