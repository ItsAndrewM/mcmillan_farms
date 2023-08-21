import Image from "next/image";
import styles from "../hero/hero.module.css";
import heroActivitiesStyles from "./heroActivities.module.css"
import utilStyles from "../../styles/utils.module.css"

const HeroActivities = ({ imageSrc, title }) => {
    return (
        <div className={`${styles.heroWrapper}`}>
            <Image src={imageSrc} className={styles.image} quality={100} alt={""} key={imageSrc} />
            <div className={styles.container}>
                <p className={utilStyles.capitalize}>Activities</p>
                <h1 className={utilStyles.capitalize}>{title}</h1>
            </div>
        </div>
    );
}

export default HeroActivities;