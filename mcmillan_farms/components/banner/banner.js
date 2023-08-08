import Image from "next/image";
import castanet from "../../public/images/Castanet_Logo.jpg";
import cbc from "../../public/images/cbc_news_network.jpg";
import global from "../../public/images/global_news.png";
import kcn from "../../public/images/kelownaCapitalNews.png";
import kelownaNow from "../../public/images/KelownaNow.webp";
import style from "./banner.module.css";

const Banner = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.imageWrapper}>
        <Image src={castanet} width={150} />
      </div>
      <div className={style.imageWrapper}>
        <Image src={cbc} width={150} />
      </div>
      <div className={style.imageWrapper}>
        <Image src={global} width={150} />
      </div>
      <div className={style.imageWrapper}>
        <Image src={kcn} width={150} />
      </div>

      <div className={style.imageWrapper}>
        <Image src={kelownaNow} width={150} />
      </div>
    </div>
  );
};

export default Banner;
