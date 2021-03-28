import React, { useImperativeHandle, useRef, forwardRef } from "react";
import styles from "./ProductImage.module.scss";
import magnify from '../assets/magnify.svg';

const ProductImage = ({ image, color }, ref) => {
  const divRef = useRef(null);
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      const target = divRef.current;
      // target.parentNode.scroll({top: target.offsetTop - 40, behavior: 'smooth'});
      target.scrollIntoView({ behavior: 'smooth'})
    }
  }));

  return (
    <div className={styles.productImage} ref={divRef}>
      <div className={styles.magnify}>
        <img src={magnify}/>
      </div>
      <img className={styles.image} src={image} alt="shoes" />
    </div>
  );
};

export default forwardRef(ProductImage);
