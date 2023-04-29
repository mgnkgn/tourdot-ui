import React from "react";

import styles from "@/styles/Services.module.css";

const ServiceLower = () => {
  return (
    <div className={styles.lowerCt}>
      <div className={styles.cardCt}>
        <div className={styles.iconCt}>
          <img
            src="./assets/Vector.png"
            alt="vector"
            width="28.33"
            height="28.33"
          />
        </div>
        <div className={styles.row2}>
          <h3>Worldwide Travelling</h3>
        </div>
        <div className={styles.row3}>
          Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Libero sagi
          ttis duis congue.
        </div>
      </div>
      <div className={styles.cardCt}>
        <div className={styles.iconCt}>
          <img
            src="./assets/Heart.png"
            alt="heart"
            width="28.33"
            height="28.33"
          />
        </div>
        <div className={styles.row2}>
          <h3>Worldwide Travelling</h3>
        </div>
        <div className={styles.row3}>
          Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Libero sagi
          ttis duis congue.
        </div>
      </div>
      <div className={styles.cardCt}>
        <div className={styles.iconCt}>
          <img
            src="./assets/Paper.png"
            alt="paper"
            width="28.33"
            height="28.33"
          />
        </div>
        <div className={styles.row2}>
          <h3>Worldwide Travelling</h3>
        </div>
        <div className={styles.row3}>
          Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Libero sagi
          ttis duis congue.
        </div>
      </div>
      <div className={styles.cardCt}>
        <div className={styles.iconCt}>
          <img
            src="./assets/Security.png"
            alt="security"
            width="28.33"
            height="28.33"
          />
        </div>
        <div className={styles.row2}>
          <h3>Worldwide Travelling</h3>
        </div>
        <div className={styles.row3}>
          Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Libero sagi
          ttis duis congue.
        </div>
      </div>
    </div>
  );
};

export default ServiceLower;
