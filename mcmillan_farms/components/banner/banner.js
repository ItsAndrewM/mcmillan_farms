import Image from "next/image";
import castanet from "../../public/images/castanet.png";
import cbc from "../../public/images/cbc_news_network.jpg";
import global from "../../public/images/global_news.png";
import kcn from "../../public/images/kelownaCapitalNews.png";
import kelownaNow from "../../public/images/KelownaNow.webp";
import style from "./banner.module.css";

const Banner = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.imageWrapper}>
        <Image src={castanet} width={150} alt={"castanet logo"} />
      </div>
      <div className={style.imageWrapper}>
        <Image src={cbc} width={150} alt={"cbc news logo"} />
      </div>
      <div className={style.imageWrapper}>
        <Image src={global} width={150} alt={"global news logo"} />
      </div>
      <div className={style.imageWrapper}>
        <Image src={kcn} width={150} alt={"kelowna capital news logo"} />
      </div>

      <div className={style.imageWrapper}>
        <Image src={kelownaNow} width={150} alt={"kelowna now logo"} />
      </div>
    </div>
  );
};

export default Banner;
