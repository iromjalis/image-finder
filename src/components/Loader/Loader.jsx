import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Loader from "react-js-loader";
//import { Test } from './Loader.styles';

class Loader extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className={"item"}>
        <Loader
          type="bubble-top"
          bgColor={"#FFFFFF"}
          title={"bubble-top"}
          size={100}
        />
      </div>
    );
  }
}

Loader.propTypes = {
  // bla: PropTypes.string,
};

Loader.defaultProps = {
  // bla: 'test',
};

export default Loader;
