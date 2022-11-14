import React from "react";

import styles from "../Input/Input.module.scss";

const Input = ({ register, placeholder, inputName, mg }) => {
  return (
    <input
      className={`${styles.input} ${styles[mg]}`}
      placeholder={placeholder}
      {...register(inputName)}
    />
  );
};

export default Input;
