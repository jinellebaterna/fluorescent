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
    <section className={styles.productImage} ref={divRef}>
      <figure className={styles.magnify}>
        <img src={magnify} alt="magnify"/>
      </figure>
      <img className={styles.image} src={image} alt="shoes" />
    </section>
  );
};

export default forwardRef(ProductImage);
