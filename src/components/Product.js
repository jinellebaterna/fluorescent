import React, { useState, useEffect } from "react";
import styles from "../App.module.scss";
import ProductImages from "./ProductImages";
import Sizes from "./Sizes";
import Colours from "./Colours";

const Product = ({ name, price, images, sizes, colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setSelectedColor(colors[0].name);
    }, 50);
  }, []);

  return (
    <main role='main' className={styles.app}>
      <section id='content' className={styles.content}>
        <ProductImages items={images} selectedColor={selectedColor} />
        <section id='productDetailsContainer' className={styles.productDetailsContainer}>
          <div className={styles.productDetails}>
            <title className={styles.name}>{name}</title>
            <span className={styles.price}>{price}</span>
            <Sizes items={sizes} />
            <div className={styles.bar} />
            <Colours
              items={colors}
              selectedColor={selectedColor}
              onSelect={setSelectedColor}
            />
            <button type='button' className={styles.addToCartContainer}>
              Add to Cart
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Product;
