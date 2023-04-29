import React from "react";

import styles from "@/styles/Us.module.css";

const Us = () => {
  return (
    <div className={styles.mainCt}>
      <div className={styles.leftCt}>
        <img
          src="./assets/woman.png"
          alt="woman"
          className={styles.woman_img}
        />
        <img src="./assets/map-bg.png" alt="map" className={styles.map_img} />
      </div>
      <div className={styles.rightCt}>
        <h3 className={styles.righth3}>Why Choose Us?</h3>
        <p className={styles.p1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque purus
          eget dolor arcu luctus amet et et. Eget mauris purus venenatis in.
        </p>
        <p className={styles.p2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo sociis
          massa et phasellus.
        </p>
        <button className={styles.btn}>Learn More</button>
        <div className={styles.lowestRow}>
          <div>
            <p className={styles.num}>560+</p>
            <p className={styles.info}>Finding Destination</p>
          </div>
          <div>
            <p className={styles.num}>30+</p>
            <p className={styles.info}>Years Experience</p>
          </div>
          <div>
            <p className={styles.num}>120k+</p>
            <p className={styles.info}>Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Us;
