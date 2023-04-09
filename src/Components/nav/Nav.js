import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import { logo, close as closeMenu } from "@/constants/images";
import { harmb } from "@/constants/icons";
import { useState } from "react";

export const Nav = () => {
  const [state, updateState] = useState(false);

  const _toggleBar = () => {
    console.warn(state);
    updateState(!state);
  };

  const close = () => {
    updateState(false);
  };

  return (
    <header id={styles.home}>
      <div className={styles.logoNav}>
        <div className="logo">
          <Link href={"logoLink"}>
            <Image
              alt="logo"
              loading="lazy"
              src={logo}
              className={styles.logoImg}
            />
          </Link>
        </div>
        <nav className={state ? styles.nav : styles.navMenu}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link
                onClick={() => close()}
                scroll={true}
                className={styles.link}
                href={"#Home"}
              >
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                onClick={() => close()}
                scroll={true}
                className={styles.link}
                href={"#About"}
              >
                About us
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                onClick={() => close()}
                scroll={true}
                className={styles.link}
                href={"#Services"}
              >
                Services
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                onClick={() => close()}
                scroll={true}
                className={styles.link}
                href={"#Contact"}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
        <button onClick={() => _toggleBar()} className={styles.navContainer}>
          <Image
            alt="menu"
            src={state ? closeMenu : harmb}
            className={styles.harmb}
          />
        </button>
      </div>
    </header>
  );
};
