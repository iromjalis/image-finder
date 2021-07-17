import React from "react";
import { Component } from "react";

import styles from "./Button.module.css";

class Button extends Component {
  handleBottom = () => {
    // window.scrollIntoView({
    //   behavior: "smooth",
    // });
  };

  render() {
    return (
      <>
        <a href="#loadMore">
          <button className={styles.BtnDown} onClick={this.handleBottom}>
            &#8595;
          </button>
        </a>
      </>
    );
  }
}

export default Button;
