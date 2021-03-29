import React, { useState } from "react";
import styles from "./Sizes.module.scss";
import Size from "./Size";

const Sizes = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section id='sizesContainer' className={styles.sizesContainer}>
      <h6 className={styles.sizeText}>Size</h6>
      <aside id='sizes' className={styles.sizes}>
        {items.map((size, index) => (
          <Size
            name={size}
            isSelected={index === selectedIndex}
            onSelect={() => setSelectedIndex(index)}
          />
        ))}
      </aside>
    </section>
  );
};

export default Sizes;
