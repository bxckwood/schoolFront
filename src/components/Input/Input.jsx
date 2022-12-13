import React from "react";

import styles from "../Input/Input.module.scss";

const Input = ({
  register,
  placeholder,
  inputName,
  mg,
  required,
  type,
  url,
  top,
  maxLength,
  minLength,
  errors,
}) => {
  const style = { top: top };
  return (
    <>
      <div className={styles.div}>
        <input
          className={`${styles.input} ${styles[mg]}`}
          placeholder={placeholder}
          type={type}
          {...register(
            inputName,
            required
              ? {
                  required: true,
                  minLength: {
                    value: minLength,
                    message: `Минимум ${minLength} символов`,
                  },
                  maxLength: {
                    value: maxLength,
                    message: `Максимум ${maxLength} символов`,
                  },
                }
              : null
          )}
        />
        <img style={style} className={styles.img} src={url} alt="" />
      </div>
      {errors[inputName] && (
        <p className={styles.error}>{errors[inputName].message}</p>
      )}
    </>
  );
};

export default Input;
