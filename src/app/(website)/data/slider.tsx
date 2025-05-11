import React from "react";
import styles from "./page.module.css"; // move relevant CSS here
import sliderImages from "../data/sliderImages";

const Slider = () => {
  return (
    <div className={`${styles.banner} ${styles.background}`}>
      <div
        className={styles.slider}
        style={{ "--quantity": sliderImages.length } as React.CSSProperties}
      >
        {sliderImages.map((src, index) => (
          <div
            key={index}
            className={styles.item}
            style={{ "--position": index + 1 } as React.CSSProperties}
          >
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
