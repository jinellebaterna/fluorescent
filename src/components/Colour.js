import React from "react";
import styles from "./Colour.module.scss";
import cx from "classnames";

const Colour = ({ color1, color2, isSelected, onSelect }) => {
  const bgColor1 = {
    backgroundColor: color1
  };

  const bgColor2 = {
    backgroundColor: color2
  };

  return (
    <div className={cx(styles.colour, {
      [styles.selected]: isSelected
    })} onClick={onSelect}>
      <div className={styles.colour1} style={bgColor1}>
        <div className={styles.colour2} style={bgColor2} />
      </div>
    </div>
  );
};

export default Colour;
