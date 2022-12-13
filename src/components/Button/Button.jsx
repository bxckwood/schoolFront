import React from "react";

import styles from "../Button/Button.module.scss";

function Button({ text, errors }) {
  return (
    <button
      disabled={Object.keys(errors).length > 0 ? true : false}
      className={styles.button}
      type="submit"
    >
      {text}
    </button>
  );
}

export default Button;
