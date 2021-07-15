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
    query: this.props.filter,
    currentPage: 1,
    pageSize: 5,
    images: [],
    showModal: false,
    src: "",
  };
  ModalOpenClick = (e) => {
    if (e.target === "img") {
      console.log("yeeeah");
    }
    console.log(e.target);
    console.log(e.currentTarget);
  };
  render() {
    const { handleClick, images } = this.props;
    const { showModal, src, user } = this.state;
    return (
      <>
        {!images && (
          <Loader
            type="bubble-top"
            bgColor={"#FFFFFF"}
            title={"bubble-top"}
            size={100}
          />
        )}
        {!showModal ? (
          images.map(({ id, previewURL, largeImageURL, user }) => {
            // this.setState({ src: largeImageURL, user: user });
            return (
              <li key={id}>
                <img
                  src={previewURL}
                  alt={user}
                  width="140"
                  height="100"
                  onClick={this.ModalOpenClick}
                  data-source={largeImageURL}
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
