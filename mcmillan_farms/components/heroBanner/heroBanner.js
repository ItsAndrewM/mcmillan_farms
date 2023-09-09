import Link from "next/link";
import style from "./heroBanner.module.css";
import utilStyles from "../../styles/utils.module.css";
import heroStyles from "../hero/hero.module.css";
import ctaLeftStyles from "../ctaLeft/ctaLeft.module.css";
import layoutStyles from "../layout/layout.module.css";
import Image from "next/image";
import collab from "../../public/images/lentelusXmf.png";
import sunflower from "../../public/images/sunflower.jpg";
import collabHorizontal from "../../public/images/collab_horizontal.png";

const HeroBanner = () => {
  return (
    <div className={`${style.wrapper}`}>
      <div className={style.container}>
        <Image
          src={collab}
          width={470}
          alt={"lentelus collab with McMillan Farms"}
          id={style.collabVertical}
          loading="lazy"
        />
        <Image
          src={collabHorizontal}
          width={300}
          alt={"lentelus collab with McMillan Farms"}
          id={style.collabHorizontal}
          loading="lazy"
        />
      </div>
      <div className={style.skinnyContainer}>
        <Image
          src={sunflower}
          alt={"picture of sunflowers"}
          height={700}
          width={690}
          className={`${style.image}`}
          loading="lazy"
        />
      </div>
      <div className={style.container}>
        <div className={ctaLeftStyles.textContainer}>
          <h1>A partnership we are proud of</h1>
          <p>
            Lentelus Farms and McMillan Farms have partnered to bring you a 5
            acre Sunflower Maze. We have got a lot more coming summer 2024.
          </p>
          <span>
            <Link
              href={"/the-farm/summer-activities"}
              className={`${layoutStyles.link}`}
            >
              Check out our other summer activities
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
