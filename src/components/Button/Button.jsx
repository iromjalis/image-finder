import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './Button.styles';

class Button extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  handleClick = () => {
    window.scrollTo({
      top: document.querySelector(".Searchbar").scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ButtonWrapper">
        <button onClick={this.handleClick}>&#8593;</button>
      </div>
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
