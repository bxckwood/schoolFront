import React from "react";

import styles from "../Input/Input.module.scss";

const Input = ({ register, placeholder, inputName, mg, required, type }) => {
  return (
    <input
      className={`${styles.input} ${styles[mg]}`}
      placeholder={placeholder}
      type={type}
      {...register(inputName, required ? { required: true } : null)}
    />
  );
};

export default Input;
