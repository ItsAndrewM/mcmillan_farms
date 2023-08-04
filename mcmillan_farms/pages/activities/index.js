import Image from "next/image";
import { activityItems } from "../../data/activityItems";
import Layout from "@/components/layout/layout";
import style from "../../styles/activities.module.css";

const Page = () => {
  return (
    <Layout>
      <div>
        <ul>
          {activityItems.map((item, index) => {
            return (
              <li>
                <div className={`${style.imageWrapper}`}>
                  <Image src={item.image} />
                </div>
                <div>
                  <small>{item.name}</small>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Page;
