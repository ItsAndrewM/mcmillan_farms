import { menuItems } from "@/data/menuItems";
import navbarStyles from "./navbar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className={navbarStyles.pageHeader}>
      <nav>
        <ul>
          {menuItems.map((menuItem, index) => {
            <li key={index}>
              <Link href={menuItem.link}>{menuItem.name}</Link>
            </li>;
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
