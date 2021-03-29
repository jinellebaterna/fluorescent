import React  from "react";
import styles from "./Colours.module.scss";
import Colour from "./Colour";

const Colours = ({items, selectedColor, onSelect}) => {
  return (
    <section>
      <label className={styles.colourText}>Colour</label>
      <div className={styles.colours}>
        {items.map(({ name, color1, color2}) => (
          <Colour name={name} color1={color1} color2={color2} onSelect={() => {
            onSelect(name)
          }} isSelected={selectedColor === name} />
        ))}
      </div>
    </section>
  );
};

export default Colours;
