import Image from "next/image";
import styles from "./footer.module.css"
import utilStyles from "../../styles/utils.module.css"
import Link from "next/link";
import logo from "../../public/images/logo_large.png";

const Footer = () => {
  return <footer>
    <div>
      <div>
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
        <div></div>
        <div></div>

      </div>
      <div>
        <div>

        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
  </footer>;
};

export default Footer;
