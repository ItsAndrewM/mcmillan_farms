import Image from "next/image";
import style from "../ctaLeft/ctaLeft.module.css";
import utilStyles from "../../styles/utils.module.css";
import layoutStyles from "../layout/layout.module.css";
import hayride from "../../public/images/hayride.jpg";
import Link from "next/link";

const CtaRight = ({ headline, desc, link, linkText, imgSrc }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.textContainer}>
          <h1>{headline}</h1>
          <p>{desc}</p>
          <span>
            <Link
              href={link}
              className={`${utilStyles.paddingTop1} ${layoutStyles.link}`}
            >
              {linkText}
            </Link>
          </span>
        </div>
      </div>
      <div className={style.container}>
        <Image
          src={imgSrc}
          quality={100}
          alt={"2 tractors parked pulling wagons for a hayride"}
        />
      </div>
    </div>
  );
};

export default CtaRight;
