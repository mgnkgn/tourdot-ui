import React from "react";

import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerCt}>
      <div className={styles.firstRow}>
        <div className={styles.col1}>
          <h3 className={styles.tourDoth3}>Tour.Dot</h3>
          <p>
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Leo sociis
            massa et pha sellus. Egestas eges Leo sociis
          </p>
          <div className={styles.imgsCt}>
            <div className={styles.imgCt}>
              <img
                src="./assets/Facebook.png"
                alt="facebook"
                className={styles.img_icon}
                width={24}
                height={24}
              />
            </div>
            <div className={styles.imgCt}>
              <img
                src="./assets/Twitter.png"
                alt="twitter"
                className={styles.img_icon}
                width={24}
                height={24}
              />
            </div>
            <div className={styles.imgCt}>
              <img
                src="./assets/Instagram.png"
                alt="instagram"
                className={styles.img_icon}
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className={styles.col2}>
          <h3 className={styles.colh3}>Menu</h3>
          <ul className={styles.colul}>
            <li className={styles.colli}>
              <a className={styles.footer_a}>Home</a>
            </li>
            <li className={styles.colli}>
              <a className={styles.footer_a}>About Us</a>
            </li>
          </ul>
        </div>
        <div className={styles.col3}>
          <h3 className={styles.colh3}>Booking Plan</h3>
          <ul className={styles.colul}>
            <li className={styles.colli}>
              <a className={styles.footer_a}>Personal Trip</a>
            </li>
            <li className={styles.colli}>
              <a className={styles.footer_a}>Group Trip</a>
            </li>
          </ul>
        </div>
        <div className={styles.col4}>
          <h3 className={styles.colh3}>Further Information</h3>
          <ul className={styles.colul}>
            <li className={styles.colli}>
              <a className={styles.footer_a}>Term & Conditions</a>
            </li>
            <li className={styles.colli}>
              <a className={styles.footer_a}>Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className={styles.col5}>
          {" "}
          <h3 className={styles.colh3}>Get in touch</h3>
          <ul className={styles.colul}>
            <li className={styles.colli}>
              <a className={styles.footer_a}>Tourplan1234@gmail.com</a>
            </li>
            <li className={styles.colli}>
              <a className={styles.footer_a}>+925874123696</a>
            </li>
            <li className={styles.colli}>
              <a className={styles.footer_a}>+925874123696</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.secondRow}>
        <p>&copy;Copyright. All right reseved.</p>
      </div>
    </div>
  );
};

export default Footer;
