import React, { Component } from "react";

import styles from "./App.module.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Modal from "./components/Modal";
import Button from "./components/Button/Button";

import Loader from "react-loader-spinner";

import api from "./service/api.js";

class App extends Component {
  state = {
    query: "",
    currentPage: 1,
    pageSize: 10,
    images: [],
    showModal: false,
    isLoading: false,
    modalImg: "",
    alt: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetch();
    }
  }

  onChange = (query) => {
    this.setState({ query, currentPage: 1, images: [] });
  };

  fetch = () => {
    this.setState({ isLoading: true });

    api
      .fetchImages(this.state)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .finally(() => {
        this.setState({ isLoading: false });

        this.handleToDown();
      });
  };

  handleToDown = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  handleClickMoreBtn = () => {
    this.setState((prevState) => ({
      ...prevState,
      currentPage: prevState.currentPage + 1,
    }));
  };

  onCloseModal = (e) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  onOpenModal = (e) => {
    this.setState((prevState) => ({
      modalImg: e.target.dataset.source || "",
      alt: e.target.dataset.title,
    }));
    this.onCloseModal();
  };

  render() {
    const { showModal, filter, images, isLoading, query, modalImg, alt } =
      this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onChange} query={query} />
        {images && isLoading && (
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        )}
        <ImageGallery onOpenModal={this.onOpenModal}>
          <ImageGalleryItem
            filter={filter}
            images={images}
            onOpenModal={this.onOpenModal}
          />
        </ImageGallery>
        {images.length > 0 && (
          <button onClick={this.fetch}>Load more...</button>
        )}

        {showModal && (
          <Modal
            onOpenModal={this.onOpenModal}
            modalImg={modalImg}
            onCloseModal={this.onCloseModal}
          >
            <img src={modalImg} alt={alt} />
          </Modal>
        )}
        <Button />
      </div>
    );
  }
}

export default App;
