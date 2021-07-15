import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './ImageGallery.styles';

class ImageGallery extends PureComponent {
  state = {
    hasError: false,
  };

  ModalOpenClick = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
  };
  render() {
    const { children } = this.props;
    return <ul id="imageGallery">{children}</ul>;
  }
}

ImageGallery.propTypes = {
  // bla: PropTypes.string,
};

ImageGallery.defaultProps = {
  // bla: 'test',
};

export default ImageGallery;
