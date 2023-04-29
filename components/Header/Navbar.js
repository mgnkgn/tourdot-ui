import React from "react";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navCt}>
      <div className={styles.navLeft}>
        <a href="" className={styles.tourDot}>
          Tour.Dot
        </a>
      </div>
      <div className={styles.navRight}>
        <div className={styles.navRight_1}>
          <ul className={styles.listCt}>
            <li>
              <a href="">Discover</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.navRight_2}>
          <div className={styles.navBtn}>
            <p>Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
