import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './ImageGalleryItem.styles';
// import ApiService from "./service/ApiService/ApiService";
import axios from "axios";
import Modal from "../Modal";

import Loader from "react-loader-spinner";
// const ApiKey = "21072245-3acfda09a1d5bc65070e6b336";
// const URL = `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=${pageSize}`;

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
  // bla: PropTypes.string,
};

ImageGalleryItem.defaultProps = {
  // bla: 'test',
};

export default ImageGalleryItem;
