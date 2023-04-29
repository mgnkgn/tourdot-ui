import React from "react";
import Navbar from "./Navbar";
import styles from "@/styles/Header.module.css";
import HeaderMain from "./HeaderMain";

const HeaderCt = () => {
  return (
    <div className={styles.headerCt}>
      <Navbar />
      <HeaderMain />
    </div>
  );
};

export default HeaderCt;
