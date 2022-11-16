import React from "react";

import styles from "../Button/Button.module.scss";

function Button({ text }) {
  return (
    <button className={styles.button} type="submit">
      {text}
    </button>
  );
}

export default Button;
