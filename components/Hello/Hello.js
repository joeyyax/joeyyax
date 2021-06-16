import React from "react";
import styles from "./Hello.module.scss";

const Hello = () => (
  <div className={styles.hello}>
    <img
      className={styles.photo}
      src="/img/joeyyax.jpg"
      alt="Joey Yax"
      title="Joey Yax"
    />
  </div>
);

export default Hello;
