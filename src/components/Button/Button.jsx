import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.css";

class Button extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <button className={styles.Btn} onClick={this.handleClick}>
        &#8593;
      </button>
    );
  }
}

Button.propTypes = {
  // bla: PropTypes.string,
};

Button.defaultProps = {
  // bla: 'test',
};

export default Button;
