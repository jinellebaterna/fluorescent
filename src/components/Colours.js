import React, { useState } from "react";
import styles from "./Colours.module.scss";
import Colour from "./Colour";

const Colours = ({items}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div>
      <span className={styles.colourText}>Colour</span>
      <div className={styles.colours}>
        {items.map(({ color1, color2}, index) => (
          <Colour color1={color1} color2={color2} onSelect={() => {
            setSelectedIndex(index)
          }} isSelected={index === selectedIndex} />
        ))}
      </div>
    </div>
  );
};

export default Colours;
