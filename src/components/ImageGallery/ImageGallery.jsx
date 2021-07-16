import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class ImageGallery extends PureComponent {
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
  images: PropTypes.arrayOf.isRequired(PropTypes.string.isRequired),
  onOpenModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ImageGallery;
