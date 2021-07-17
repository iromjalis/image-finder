import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";

import Loader from "react-loader-spinner";

class ImageGalleryItem extends PureComponent {
  state = {
    showModal: false,
  };
  render() {
    const { images, onOpenModal } = this.props;
    const { showModal, src, user } = this.state;
    return (
      <>
        {images.length < 0 && (
          <Loader
            type="bubble-top"
            bgColor={"#FFFFFF"}
            title={"bubble-top"}
            size={100}
          />
        )}
        {!showModal ? (
          images.map(({ id, previewURL, largeImageURL, user }) => {
            return (
              <li key={id} onClick={onOpenModal}>
                <img
                  src={previewURL}
                  alt={user}
                  width="140"
                  height="100"
                  data-source={largeImageURL}
                  data-title={user}
                />
              </li>
            );
          })
        ) : (
          <Modal>
            <img src={src} alt={user} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
