import Image from "next/image";
import style from "../ctaLeft/ctaLeft.module.css";
import utilStyles from "../../styles/utils.module.css";
import layoutStyles from "../layout/layout.module.css";
import hayride from "../../public/images/hayride.jpg";
import Link from "next/link";

const CtaRight = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
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
      <div className={style.container}>
        <Image
          src={hayride}
          quality={100}
          alt={"2 tractors parked pulling wagons for a hayride"}
        />
      </div>
    </div>
  );
};

export default CtaRight;
