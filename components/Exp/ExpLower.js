import React, { useState } from "react";

import styles from "@/styles/Exp.module.css";

const ExpLower = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div className={styles.lowerCt}>
      <div className={styles.btnsCt}>
        <div className={`${styles.btn} ${styles.btnLeft}`} onClick={handlePrev}>
          &lt;
        </div>
        <div
          className={`${styles.btn} ${styles.btnRight}`}
          onClick={handleNext}
        >
          &gt;
        </div>
      </div>
      <div
        className={styles.cards}
        style={{ transform: `translateX(-${currentIndex * 45}%)` }}
      >
        <div className={styles.card}>
          <img
            src="./assets/View1.png"
            alt="view"
            width="325"
            height="384"
            className={styles.view_img}
          />
          <h4 className={styles.cardh4}>Enjoy the beauty of the railto Hill</h4>
          <p className={styles.cardp}>Vengema, Indonesia</p>
          <div className={styles.cardLowest}>
            <div className={styles.rating}>
              <img
                src="./assets/rate-star.png"
                alt="star"
                className="star-icon"
              />
              <p>4.5</p>
            </div>
            <div className={styles.review}>(1.5K+ Review)</div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="./assets/View2.png"
            alt="view"
            width="325"
            height="384"
            className={styles.view_img}
          />
          <h4 className={styles.cardh4}>
            Enjoy the beauty of the floating city
          </h4>
          <p className={styles.cardp}>Bahrando, Italy</p>
          <div className={styles.cardLowest}>
            <div className={styles.rating}>
              <img
                src="./assets/rate-star.png"
                alt="star"
                className="star-icon"
              />
              <p>4.5</p>
            </div>
            <div className={styles.review}>(1.8K+ Review)</div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="./assets/View3.png"
            alt="view"
            width="325"
            height="384"
            className={styles.view_img}
          />
          <h4 className={styles.cardh4}>Enjoy the beauty of the sea beach</h4>
          <p className={styles.cardp}>Los engelous, america</p>
          <div className={styles.cardLowest}>
            <div className={styles.rating}>
              <img
                src="./assets/rate-star.png"
                alt="star"
                className="star-icon"
              />
              <p>4.5</p>
            </div>
            <div className={styles.review}>(2.3K+ Review)</div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="./assets/View1.png"
            alt="view"
            width="325"
            height="384"
            className={styles.view_img}
          />
          <h4 className={styles.cardh4}>
            Enjoy the beauty of the railto bridger
          </h4>
          <p className={styles.cardp}>Vengema, Indonesia</p>
          <div className={styles.cardLowest}>
            <div className={styles.rating}>
              <img
                src="./assets/rate-star.png"
                alt="star"
                className="star-icon"
              />
              <p>4.5</p>
            </div>
            <div className={styles.review}>(1.5K+ Review)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpLower;
