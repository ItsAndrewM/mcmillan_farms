import Image from "next/image";
import styles from "./footer.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import layoutStyles from "../layout/layout.module.css"
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
                  <li><h3><Link href={menuItem.link} className={layoutStyles.link}>{menuItem.name}</Link></h3></li>
                  <ul>
                    {menuItem.submenu.map((subMenuItem, index) => {
                      return (
                        <li key={index}>{subMenuItem.icon && subMenuItem.icon}<Link className={layoutStyles.link} href={subMenuItem.link}>{subMenuItem.name}</Link></li>
                      )
                    })}
                  </ul>
                </ul>
              )
            })}
          </div>
        </div>
        <div className={styles.container}>
          <div><p>Copyright © 2023 by Ron & Colleen McMillan</p></div>
          <div className={styles.legal}>
            <span><Link className={layoutStyles.link} href={"/"}>Privacy Policy</Link></span>
            <span>|</span>
            <span><Link className={layoutStyles.link} href={"/"}>Terms and Conditions</Link></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
