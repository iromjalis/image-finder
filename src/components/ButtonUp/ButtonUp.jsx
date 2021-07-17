import React from "react";
import { Component } from "react";

import styles from "./Button.module.css";

class Button extends Component {
  handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <>
        <button className={styles.BtnUp} onClick={this.handleTop}>
          &#8593;
        </button>
      </>
    );
  }
}

export default Button;
