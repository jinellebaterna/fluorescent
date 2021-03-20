import React  from "react";
import styles from "./Colours.module.scss";
import Colour from "./Colour";

const Colours = ({items, selectedColor, onSelect}) => {
  return (
    <div>
      <span className={styles.colourText}>Colour</span>
      <div className={styles.colours}>
        {items.map(({ name, color1, color2}) => (
          <Colour color1={color1} color2={color2} onSelect={() => {
            onSelect(name)
          }} isSelected={selectedColor === name} />
        ))}
      </div>
    </div>
  );
};

export default Colours;
