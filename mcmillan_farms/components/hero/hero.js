import Image from "next/image";
import styles from "./hero.module.css";
import Link from "next/link";
const Hero = ({ imageSrc, header, description, link, linkText }) => {
  return (
    <div className={`${styles.heroWrapper}`}>
      <Image src={imageSrc} className={styles.image} quality={100} />
      <div className={styles.container}>
        <h1>{header}</h1>
        <p>{description}</p>
        <Link href={link}>{linkText}</Link>
      </div>
    </div>
  );
};

export default Hero;
