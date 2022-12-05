import React from "react";

import styles from "../InputNoSubmit/InputNoSubmit.module.scss";

const InputNoSubmit = ({ placeholder, bottom, value, onChangeFunc }) => {
  return (
    <>
      <div className={styles.div}>
        <input
          style={{ marginBottom: bottom }}
          className={`${styles.input}`}
          placeholder={placeholder}
          onChange={onChangeFunc}
          value={value}
        />
      </div>
    </>
  );
};

export default InputNoSubmit;
