import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Loader extends PureComponent {
  render() {
    return (
      <Loader
        type="bubble-top"
        bgColor={"#FFFFFF"}
        title={"bubble-top"}
        size={100}
      />
    );
  }
}

export default Loader;
