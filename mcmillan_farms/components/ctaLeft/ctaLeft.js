import Image from "next/image";
import style from "./ctaLeft.module.css";
import utilStyles from "../../styles/utils.module.css";
import layoutStyles from "../layout/layout.module.css";
import pumpkin from "../../public/images/pumpkins4.jpg";
import Link from "next/link";

const CtaLeft = () => {
  return (
    <div className={style.wrapper}>
      <div className={`${style.container}`}>
        <Image
          src={pumpkin}
          height={800}
          quality={100}
          alt={"small orange pumpkins in a pile"}
        />
      </div>
      <div className={`${style.container}`}>
        <div className={style.textContainer}>
          <h1>Now Available In Washington D.C.</h1>
          <p>
            The refreshingly sweet, subtly tart Koyo Berry is now available in
            Washington D.C. at three new Whole Foods Market locations!
          </p>
          <span>
            <Link
              href={"/"}
              className={`${utilStyles.paddingTop1} ${layoutStyles.link}`}
            >
              Learn More
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CtaLeft;
