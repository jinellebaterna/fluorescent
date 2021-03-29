import React, { useState } from "react";
import styles from "./Sizes.module.scss";
import Size from "./Size";

const Sizes = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section id='sizesContainer' className={styles.sizesContainer}>
      <label className={styles.sizeText}>Size</label>
      <div id='sizes' className={styles.sizes}>
        {items.map((size, index) => (
          <Size
            name={size}
            isSelected={index === selectedIndex}
            onSelect={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Sizes;
