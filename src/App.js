import React from "react";
import styles from "./App.module.scss";
import Colours from "./components/Colours";
import Sizes from "./components/Sizes";
import Product from "./components/Product";
import redShoes from "../src/assets/redShoes.png";
import greenShoes from "../src/assets/greenShoes.png";
import blueShoes from "../src/assets/blueShoes.png";

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

  const images = [redShoes, greenShoes, blueShoes];

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <Product items={images} />
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
