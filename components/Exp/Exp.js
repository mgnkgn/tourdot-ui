import React from "react";
import ExpUpper from "./ExpUpper";

import styles from "@/styles/Exp.module.css";
import ExpLower from "./ExpLower";

const Exp = () => {
  return (
    <div className={styles.mainCt}>
      <ExpUpper />
      <ExpLower />
    </div>
  );
};

export default Exp;
