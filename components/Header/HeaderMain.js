import React from "react";

import styles from "@/styles/Header.module.css";

const HeaderMain = () => {
  return (
    <div className={styles.hdMain}>
      <img
        src="./assets/Star1.png"
        alt="star"
        className={`${styles.star} ${styles.star1}`}
      />
      <img
        src="./assets/Star1.png"
        alt="star"
        className={`${styles.star} ${styles.star2}`}
      />
      <img
        src="./assets/Star2.png"
        alt="star"
        className={`${styles.star} ${styles.star3}`}
      />
      <img
        src="./assets/Star2.png"
        alt="star"
        className={`${styles.star} ${styles.star4}`}
      />

      <div className={styles.mainLeft}>
        <img
          src="./assets/plane.png"
          alt="plane"
          width="187"
          height="286"
          className={styles.plane}
        />
        <h2 className={styles.mainh2}>
          After A Long Time <br /> You Can Enjoy
        </h2>
        <p className={styles.mainp}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero <br />
          sagittis duis congue a a vitae orci blandit. Est mi.
        </p>
        <div className={styles.inputCt}>
          <div className={styles.inputCt1}>
            <div className={styles.imgCt}>
              <img src="./assets/Pin.png" alt="location1" />
            </div>
            <div className={styles.col}>
              <label className={styles.label} htmlFor="my-select-loc">
                Location
              </label>
              <select className={styles.my_select} id="my-select-loc">
                <option value="option-1">Bogor, Indonesia</option>
                <option value="option-2">Sao Paulo, Brazil</option>
                <option value="option-3">Tokyo, Japan</option>
              </select>
            </div>
          </div>
          <div className={styles.inputCt2}>
            <div className={styles.imgCt}>
              <img src="./assets/Calendar.png" alt="calendar" />
            </div>
            <div className={styles.col}>
              <label htmlFor="my-date" className={styles.label}>
                Date
              </label>
              <input type="date" id="my-date" className={styles.input} />
            </div>
          </div>
          <div className={styles.inputCt3}>
            <div className={styles.btn}>Search</div>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className={styles.mainRight}>
        <img
          src="./assets/Star2.png"
          alt="star"
          className={`${styles.star} ${styles.star5}`}
        />
        <div className={styles.mainRight_imgCt}>
          <img
            src="./assets/Union.png"
            alt="statue"
            width="325"
            height="450"
            className={styles.imgUnion}
          />
          <div className={styles.whiteBox}>
            <div className={styles.whiteBox_upper}>How was feelings?</div>
            <div className={styles.whiteBox_lower}>
              <img
                src="./assets/happy.png"
                alt="happy"
                width="35.96"
                height="35.02"
              />
              <img
                src="./assets/sad.png"
                alt="sad"
                width="35.96"
                height="35.02"
              />
              <img
                src="./assets/openMouth.png"
                alt="suprised"
                width="35.96"
                height="35.02"
              />
              <img
                src="./assets/angry.png"
                alt="angry"
                width="35.96"
                height="35.02"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
