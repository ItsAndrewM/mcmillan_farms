import Link from "next/link";
import styles from "./annoucementBar.module.css";
import layoutStyles from "../layout/layout.module.css";
import footerStyles from "../footer/footer.module.css";
import { useEffect, useState } from "react";
const AnnoucementBar = ({ annoucement, linkText, link }) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = (e) => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <div className={`${!isVisible ? styles.hide : styles.wrapper}`}>
      <div>
        <p>{annoucement}</p>
        <span>
          <Link href={link} className={footerStyles.link}>
            {linkText}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default AnnoucementBar;
