import React from "react";
import styles from "./ProductImage.module.scss";
import magnify from '../assets/magnify.svg';

const ProductImage = ({ image }) => {
  return (
    <div className={styles.productImage}>
      <div className={styles.magnify}>
        <img src={magnify}/>
      </div>
      <img className={styles.image} src={image} alt="shoes" />
    </div>
  );
};

export default ProductImage;
