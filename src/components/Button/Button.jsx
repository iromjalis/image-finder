import React from "react";

import styles from "./Button.module.css";

const Button = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className={styles.Btn} onClick={handleClick}>
      &#8593;
    </button>
  );
};

export default Button;
