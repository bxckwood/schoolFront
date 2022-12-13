import React from "react";

import styles from "../ButtonNoSubmit/ButtonNoSubmit.module.scss";

function ButtonNoSubmit({ text, right, left, clickFunction }) {
  return (
    <>
      {clickFunction ? (
        <button
          disabled={false}
          style={{ marginRight: right, marginLeft: left }}
          className={styles.button}
          onClick={() => clickFunction()}
        >
          {text}
        </button>
      ) : (
        <button
          disabled={false}
          style={{ marginRight: right, marginLeft: left }}
          className={styles.button}
        >
          {text}
        </button>
      )}
    </>
  );
}

export default ButtonNoSubmit;
