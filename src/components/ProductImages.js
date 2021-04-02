import React from "react";
import styles from "./ProductImages.module.scss";
import ProductImage from "./ProductImage";

const ProductImages = ({ items, selectedColor }) => {
  let item = items.find(item => item.color === selectedColor);

  return (
    <section className={styles.productImages}>
      <ProductImage color={item.color} image={item.image} />
    </section>
  );
};

export default ProductImages;
