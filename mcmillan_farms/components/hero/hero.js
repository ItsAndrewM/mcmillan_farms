import Image from "next/image";
import styles from "./hero.module.css";
const Hero = ({ imageSrc }) => {
  console.log(imageSrc);
  return (
    <div className={`${styles.heroWrapper}`}>
      <Image src={imageSrc} className={styles.image} />
    </div>
  );
};

export default Hero;
