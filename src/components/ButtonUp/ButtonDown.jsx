import React from "react";
import { Component } from "react";

import styles from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <>
        <a href="#loadMore">
          <button className={styles.BtnDown}>&#8595;</button>
        </a>
      </>
    );
  }
}

export default Button;
