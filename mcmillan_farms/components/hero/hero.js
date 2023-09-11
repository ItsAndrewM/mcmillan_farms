import Image from "next/image";
import styles from "./hero.module.css";
import Link from "next/link";
import layoutStyles from "../layout/layout.module.css";
const Hero = ({ imageSrc, header, description, link, linkText }) => {
  return (
    <div className={`${styles.heroWrapper}`}>
      <Image
        src={imageSrc}
        className={styles.image}
        quality={100}
        height={750}
        width={1125}
        alt={""}
        priority
      />
      <div className={styles.container}>
        <h1>{header}</h1>
        <p>{description}</p>
        <span>
          <Link
            href={link}
            // className={`${layoutStyles.link} ${layoutStyles.button}`}
            className={` ${layoutStyles.button}`}
          >
            {linkText}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Hero;
