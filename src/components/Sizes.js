import React, { useState } from "react";
import styles from "./Sizes.module.scss";
import Size from "./Size";

const Sizes = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className={styles.sizesContainer}>
      <span className={styles.sizeText}>Size</span>
      <div className={styles.sizes}>
        {items.map((size, index) => (
          <Size
            name={size}
            isSelected={index === selectedIndex}
            onSelect={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sizes;
