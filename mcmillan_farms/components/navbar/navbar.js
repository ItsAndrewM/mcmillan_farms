import Image from "next/image";
import { menuItems } from "../../data/menuItems";
import navbarStyles from "./navbar.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import logo from "../../public/images/logo_large.png";
import { menuItemsRight } from "@/data/menuItemsRight";

const NavBar = () => {
  return (
    <header className={navbarStyles.pageHeader}>
      <nav className={navbarStyles.navigation}>
        <ul className={navbarStyles.menuItem}>
          {menuItems.map((menuItem, index) => {
            return (
              <li key={index}>
                <Link
                  href={menuItem.link}
                  className={`${utilStyles.capitalize}`}
                >
                  {menuItem.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href={"/"}>
          <Image
            src={logo}
            height={250}
            className={utilStyles.borderCircle}
            alt="McMillan Farms logo"
          />
        </Link>
        <ul className={navbarStyles.menuItem}>
          {menuItemsRight.map((menuItem, index) => {
            return (
              <li key={index}>
                <Link
                  href={menuItem.link}
                  className={`${utilStyles.capitalize}`}
                >
                  {menuItem.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
