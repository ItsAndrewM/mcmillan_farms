import Image from "next/image";
import { menuItems } from "../../data/menuItems";
import navbarStyles from "./navbar.module.css";
import utilStyles from "../../styles/utils.module.css";
import layoutStyles from "../layout/layout.module.css";
import Link from "next/link";
import logo from "../../public/images/logo_large.png";
import { menuItemsRight } from "@/data/menuItemsRight";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mobileMenu } from "@/data/mobileMenu";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const handleLeave = (e) => {
    e.preventDefault();
    setShow(false);
  };
  return (
    <header className={navbarStyles.pageHeader}>
      <nav className={navbarStyles.navigation}>
        {/* mobile menu */}
        <div id={navbarStyles.menuToggle}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id={navbarStyles.menu}>
            <li className={utilStyles.borderBottomGrey}>
              <h3>McMillan Farms</h3>
            </li>
            {mobileMenu.map((menuItem, index) => {
              return (
                <li key={index}>
                  <Link
                    href={menuItem.link}
                    className={`${layoutStyles.link} ${utilStyles.capitalize} ${
                      pathname == menuItem.link
                        ? layoutStyles.active
                        : layoutStyles.link
                    }`}
                  >
                    {menuItem.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className={navbarStyles.menuItem}>
          {menuItems.map((menuItem, index) => {
            return (
              <li key={index} onMouseEnter={menuItem.subMenu && handleClick}>
                <Link
                  href={menuItem.link}
                  className={`${utilStyles.capitalize} ${
                    pathname == menuItem.link
                      ? layoutStyles.active
                      : layoutStyles.link
                  }`}
                >
                  {menuItem.name}
                </Link>
                {menuItem.subMenu && (
                  <ul
                    className={
                      show == false
                        ? navbarStyles.subMenuItemHide
                        : navbarStyles.subMenuItemShow
                    }
                    onMouseLeave={handleLeave}
                  >
                    {menuItem.subMenu.map((subMenuItem, index) => {
                      return (
                        <li key={index}>
                          <Link
                            href={subMenuItem.link}
                            className={`${utilStyles.capitalize} ${
                              pathname == subMenuItem.link
                                ? layoutStyles.active
                                : layoutStyles.link
                            }`}
                          >
                            {subMenuItem.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <Link href={"/"}>
          <Image
            src={logo}
            height={250}
            className={utilStyles.borderCircle}
            alt={"McMillan Farms logo"}
          />
        </Link>
        <ul className={navbarStyles.menuItem}>
          {menuItemsRight.map((menuItem, index) => {
            return (
              <li key={index}>
                <Link
                  href={menuItem.link}
                  className={`${utilStyles.capitalize} ${
                    pathname == menuItem.link
                      ? layoutStyles.active
                      : layoutStyles.link
                  }`}
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
