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
        />
        <Image
          src={collabHorizontal}
          width={300}
          alt={"lentelus collab with McMillan Farms"}
          id={style.collabHorizontal}
        />
      </div>
      <div className={style.skinnyContainer}>
        <Image
          src={sunflower}
          alt={"picture of sunflowers"}
          height={700}
          width={690}
          className={`${style.image}`}
        />
      </div>
      <div className={style.container}>
        <div className={ctaLeftStyles.textContainer}>
          <h1>Find Oishii at Whole Foods Market</h1>
          <p>
            Oishii and Whole Foods have partnered to bring our berries to
            locations throughout New York City, New Jersey, Connecticut, and
            D.C.
          </p>
          <span>
            <Link href={"/"} className={`${layoutStyles.link}`}>
              Find Oishii at Whole Foods Market
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
