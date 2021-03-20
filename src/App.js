import React from "react";
import styles from "./App.module.scss";
import redShoes from "./assets/redShoes.svg";
import greenShoes from "./assets/greenShoes.svg";
import blueShoes from "./assets/blueShoes.svg";
import Colours from "./components/Colours";
import Sizes from "./components/Sizes";

const App = () => {
  const colors = [
    {
      color1: "#8A3D28",
      color2: "#AC5941"
    },
    {
      color1: "#1F737E",
      color2: "#419FAC"
    },
    {
      color1: "#1F2E7E",
      color2: "#416CAC"
    }
  ];

  const sizes = ["Small", "Medium", "Large", "Extra Large"];

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img className={styles.product} src={redShoes} alt="redShoes" />
          <img className={styles.product} src={greenShoes} alt="greenShoes" />
          <img className={styles.product} src={blueShoes} alt="blueShoes" />
        </div>
        <div className={styles.productDetails}>
          <span className={styles.name}>Red Flyknit Trainers</span>
          <span className={styles.price}>$190.00</span>
          <Sizes items={sizes} />
          <hr className={styles.bar} />
          <Colours items={colors} />
          <div className={styles.addToCartContainer}>
            <p className={styles.addToCartText}>Add to Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
