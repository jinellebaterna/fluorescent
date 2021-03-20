import React from "react";
import styles from "./Size.module.scss";
import cx from "classnames";

const Size = ({ name, isSelected, onSelect }) => {
  return (
    <div
      className={cx(styles.size, {
        [styles.selected]: isSelected
      })}
      onClick={onSelect}
    >
      {name}
    </div>
  );
};

export default Size;
