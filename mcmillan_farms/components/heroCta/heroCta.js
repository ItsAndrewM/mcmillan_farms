import Image from "next/image";
import styles from "../hero/hero.module.css";
import heroCtaStyles from "./heroCta.module.css";
import Link from "next/link";
import layoutStyles from "../layout/layout.module.css";
const HeroCta = ({ imageSrc, header, link, linkText }) => {
  return (
    <div className={`${styles.heroWrapper}`}>
      <Image
        src={imageSrc}
        className={styles.image}
        quality={100}
        alt={""}
        loading="lazy"
      />
      <div className={heroCtaStyles.container}>
        <h1>{header}</h1>
        <span>
          <Link href={link} className={`${layoutStyles.link}`}>
            {linkText}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default HeroCta;
