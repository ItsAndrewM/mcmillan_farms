import Image from "next/image";
import style from "../ctaLeft/ctaLeft.module.css";
import utilStyles from "../../styles/utils.module.css";
import layoutStyles from "../layout/layout.module.css";
import hayride from "../../public/images/hayride.jpg";
import Link from "next/link";

const CtaRight = ({ headline, desc, link, linkText, imgSrc, altText }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.textContainer}>
          <h1>{headline}</h1>
          <p>{desc}</p>
          {link && linkText && (
            <span>
              <Link
                href={link}
                className={` ${layoutStyles.checkout} ${layoutStyles.largeCheckout}`}
              >
                {linkText}
              </Link>
            </span>
          )}
        </div>
      </div>
      <div className={style.container}>
        <Image src={imgSrc} quality={100} alt={altText} loading="lazy" />
      </div>
    </div>
  );
};

export default CtaRight;
