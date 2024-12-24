import React from "react";
import Link from "next/link";
import { FiMap, FiSearch, FiUser,FiShoppingCart } from "react-icons/fi";
import Image from "next/image";

import logo from "@/public/qf.png";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo" width={100} height={60} />
      </div>
      <div className={styles.icons}>
      <div className={styles.icon} data-tip="Products">
          <Link href="/Home">
            <FiShoppingCart/>
          </Link>
        </div>
        <div className={styles.icon} data-tip="Map">
          <Link href="/Home/Map">
            <FiMap />
          </Link>
        </div>
        <div className={styles.icon} data-tip="Search">
          <Link href="/Home/Search">
            <FiSearch />
          </Link>
        </div>
        <div className={styles.icon} data-tip="Profile">
          <Link href="/Home/Profile">
            <FiUser/><span className={styles.profileName}>John Doe</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
