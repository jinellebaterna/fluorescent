import React from "react";
import styles from "./Product.module.scss";
import ProductImage from "./ProductImage";


const Product = ({ items }) => {
  return (
    <div className={styles.imageContainer}>
      {items.map((image) => (
        <ProductImage
          image={image}
        />
      ))}
    </div>
  );
};

export default Product;
