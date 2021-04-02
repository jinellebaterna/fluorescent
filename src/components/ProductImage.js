import React from "react";
import styles from "./ProductImage.module.scss";
import magnify from "../assets/magnify.svg";

const ProductImage = ({ image }) => {
  return (
    <section className={styles.productImage}>
      <figure className={styles.magnify}>
        <img src={magnify} alt="magnify" />
      </figure>
      <img className={styles.image} src={image} alt="shoes" />
    </section>
  );
};

export default ProductImage;
