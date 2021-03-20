import React, { useEffect, useRef } from "react";
import styles from "./ProductImages.module.scss";
import ProductImage from "./ProductImage";

const ProductImages = ({ items, selectedColor }) => {
  const selectedImageRef = useRef(null);

  useEffect(() => {
    if (selectedImageRef.current !== null) {
      selectedImageRef.current.scrollIntoView();
    }
  }, [selectedColor, selectedImageRef]);

  return (
    <div className={styles.productImages}>
      {items.map(({ color, image }) => (
        <ProductImage
          ref={color === selectedColor ? selectedImageRef : null}
          color={color}
          image={image}
        />
      ))}
    </div>
  );
};

export default ProductImages;
