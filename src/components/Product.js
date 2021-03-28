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
    <div className={styles.app}>
      <div className={styles.content}>
        <ProductImages items={images} selectedColor={selectedColor} />
        <div className={styles.productDetailsContainer}>
          <div className={styles.productDetails}>
            <span className={styles.name}>{name}</span>
            <span className={styles.price}>{price}</span>
            <Sizes items={sizes} />
            <div className={styles.bar} />
            <Colours
              items={colors}
              selectedColor={selectedColor}
              onSelect={setSelectedColor}
            />
            <div className={styles.addToCartContainer}>
              <p className={styles.addToCartText}>Add to Cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
