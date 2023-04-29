import React from "react";

import styles from "@/styles/AppDownload.module.css";

const AppDownload = () => {
  return (
    <div className={styles.appCt}>
      <div className={styles.main}>
        <h3 className={styles.mainh3}>Download our apps now!</h3>
        <p className={styles.mainp}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className={styles.mainLower}>
          <div className={styles.info}>
            <img
              src="./assets/PlayStore.png"
              alt="play-store"
              className={styles.brandImg}
            />
            <div className={styles.brand}>
              <p className={styles.action}>Get it on</p>
              <p className={styles.shop}>App Store</p>
            </div>
          </div>
          <div className={styles.info}>
            <img
              src="./assets/Apple.png"
              alt="app-store"
              className={styles.brandImg}
            />
            <div className={styles.brand}>
              <p className={styles.action}>Download on</p>
              <p className={styles.shop}>Play Store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
