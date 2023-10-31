import Image from "next/image";
import style from "./ctaLeftColouredVariation.module.css";
import utilStyles from "@/styles/utils.module.css";
import layoutStyles from "../layout/layout.module.css";
import Link from "next/link";

const CtaLeftColouredVariation = ({
  imageSrc,
  headline,
  desc,
  tag,
  altText,
  link,
  linkText,
}) => {
  return (
    <div className={`${style.wrapper} ${utilStyles.cream}`}>
      <div className={style.container}>
        <Image
          src={imageSrc}
          height={800}
          width={800}
          quality={100}
          alt={altText}
          loading="lazy"
        />
      </div>
      <div className={`${style.container}  ${style.cream}`}>
        <div className={style.textContainer}>
          <small>{tag}</small>
          <h3>{headline}</h3>
          <p>{desc}</p>
          <span>
            <Link
              href={link}
              className={` ${layoutStyles.checkout} ${layoutStyles.largeCheckout}`}
            >
              {linkText}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CtaLeftColouredVariation;
