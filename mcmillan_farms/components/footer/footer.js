import Image from "next/image";
import styles from "./footer.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import layoutStyles from "../layout/layout.module.css";
import logo from "../../public/images/logos/logo_text_right.png";
import { footerData } from "@/data/footerData";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <Link href={"/"}>
              <Image
                src={logo}
                height={250}
                className={utilStyles.borderCircle}
                alt={"McMillan Farms logo"}
              />
            </Link>
          </div>
          <div className={styles.container}>
            {footerData.map((menuItem, index) => {
              return (
                <ul className={styles.column} key={index}>
                  <li>
                    <h3>
                      <Link href={menuItem.link} className={styles.link}>
                        {menuItem.name}
                      </Link>
                    </h3>
                  </li>
                  <ul>
                    {menuItem.submenu.map((subMenuItem, index) => {
                      return (
                        <li key={index}>
                          <Link className={styles.link} href={subMenuItem.link}>
                            <span>{subMenuItem.icon && subMenuItem.icon}</span>
                            <span>{subMenuItem.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </ul>
              );
            })}
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.legalContainer}>
            <p>
              © McMillan Farms 2023 • Site by
              <span>
                <Link
                  href={"https://muffinware.vercel.app/"}
                  className={styles.link}
                >
                  MuffinWare
                </Link>
              </span>
            </p>
          </div>
          <div className={`${styles.legal} ${styles.legalContainer}`}>
            <span>
              <Link className={styles.link} href={"/legal/privacy-policy"}>
                Privacy Policy
              </Link>
            </span>
            <span>|</span>
            <span>
              <Link
                className={styles.link}
                href={"/legal/terms-and-conditions"}
              >
                Terms and Conditions
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
