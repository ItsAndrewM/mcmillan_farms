import Link from "next/link";
import logo from "../../public/images/logo_large.png";
import styles from "./contactUsBanner.module.css";
import Image from "next/image";
import layoutStyles from "../layout/layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import { GiPumpkinLantern } from "react-icons/gi";

const ContactUsBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <GiPumpkinLantern width={50} size={50} />
        </div>
        <div className={styles.textWrapper}>
          <h2>Interested in getting involved?</h2>
          <p>
            Be the first to know when{" "}
            <span className={utilStyles.underline}>McMillan Farms</span> is
            open.
          </p>
          <span>
            <Link href={"/contact-us"} className={layoutStyles.link}>
              Send us a message
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBanner;
