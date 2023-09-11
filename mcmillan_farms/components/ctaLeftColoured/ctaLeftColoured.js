import Image from "next/image";
import style from "../ctaLeft/ctaLeft.module.css";
import utilStyles from "../../styles/utils.module.css";
import layoutStyles from "../layout/layout.module.css";
import donkey from "../../public/images/donkey.jpg";
import Link from "next/link";

const CtaLeftColoured = ({ imageSrc, headline, desc, link, linkText }) => {
  return (
    <div className={`${style.wrapper} ${utilStyles.cream}`}>
      <div className={style.container}>
        <Image
          src={imageSrc}
          height={800}
          width={800}
          quality={100}
          alt={""}
          loading="lazy"
        />
      </div>
      <div className={`${style.container}  ${style.cream}`}>
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
    </div>
  );
};

export default CtaLeftColoured;
