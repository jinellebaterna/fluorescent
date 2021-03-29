import React from "react";
import styles from "./Size.module.scss";
import cx from "classnames";

const Size = ({ name, isSelected, onSelect }) => {
  return (
    <button id='size'
      className={cx(styles.size, {
        [styles.selected]: isSelected
      })}
      onClick={onSelect}
    >
      {name}
    </button>
  );
};

export default Size;
