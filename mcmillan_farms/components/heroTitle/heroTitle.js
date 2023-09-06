import Image from "next/image";
import styles from "../hero/hero.module.css";
import utilStyles from "../../styles/utils.module.css";

const HeroTitle = ({ imageSrc, title }) => {
  return (
    <div className={`${styles.heroWrapper}`}>
      <Image
        src={imageSrc}
        className={styles.image}
        quality={100}
        alt={""}
        key={imageSrc}
        priority={true}
      />
      <div className={styles.container}>
        <h1 className={utilStyles.capitalize}>{title}</h1>
      </div>
    </div>
  );
};

export default HeroTitle;
