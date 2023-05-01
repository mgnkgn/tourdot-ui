import React, { useState } from "react";

import styles from "@/styles/Customers.module.css";
import useWindowDimensions from "../util/useWindowDimensions";

const Customers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { height, width } = useWindowDimensions();

  const handlePrev = () => {
    if (currentIndex === 0) {
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    const numCards = 3;
    const maxPoint = numCards - 1;
    if (currentIndex === maxPoint) {
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <div className={styles.customersCt}>
      <div className={styles.headerCt}>
        <h2 className={styles.headerh2}>Experience of Our Customers</h2>
        <p className={styles.headerp}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Leo sociis massa et phasellus. Egestas egestas.
        </p>
      </div>
      <div className={styles.lowerCt}>
        <div className={styles.btnsCt}>
          <div
            className={`${styles.btn} ${styles.btnLeft}`}
            onClick={handlePrev}
          >
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
          className={styles.cardsCt}
          style={{
            transform: `translateX(-${
              currentIndex *
              `${
                width > 800
                  ? width * 0.035
                  : width > 600 && width <= 800
                  ? width * 0.075
                  : width < 600 && width >= 500
                  ? width * 0.085
                  : width < 500
                  ? width * 0.15
                  : width * 0.15
              }`
            }%)`,
          }}
        >
          <div className={styles.card}>
            <div className={styles.card_row1}>
              <div className={styles.imgCt}>
                <img
                  src="./assets/customer1.png"
                  alt="customer"
                  className={styles.imgCustomer}
                  width={56}
                  height={56}
                />
              </div>
              <div className={styles.customerInfo}>
                <h4>Morich Brown</h4>
                <div className={styles.infoCt}>
                  <img
                    src="./assets/rate-star.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                  <p className={styles.infoP}>(4.5)</p>
                </div>
              </div>
            </div>
            <div className={styles.card_row2}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                pretium sceleri sque....
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_row1}>
              <div className={styles.imgCt}>
                <img
                  src="./assets/customer2.png"
                  alt="customer"
                  className={styles.imgCustomer}
                  width={56}
                  height={56}
                />
              </div>
              <div className={styles.customerInfo}>
                <h4>Sahara Ben</h4>
                <div className={styles.infoCt}>
                  <img
                    src="./assets/rate-star.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                  <p className={styles.infoP}>(4.5)</p>
                </div>
              </div>
            </div>
            <div className={styles.card_row2}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                pretium sceleri sque....
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_row1}>
              <div className={styles.imgCt}>
                <img
                  src="./assets/customer3.png"
                  alt="customer"
                  className={styles.imgCustomer}
                  width={56}
                  height={56}
                />
              </div>
              <div className={styles.customerInfo}>
                <h4>Morich Brown</h4>
                <div className={styles.infoCt}>
                  <img
                    src="./assets/rate-star.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                  <p className={styles.infoP}>(4.5)</p>
                </div>
              </div>
            </div>
            <div className={styles.card_row2}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                pretium sceleri sque....
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
