import React, { Component } from "react";

import styles from "./App.module.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Modal from "./components/Modal";
import Button from "./components/Button/Button";

import axios from "axios";
import Loader from "react-loader-spinner";

import apiService from "./service/apiService/apiService";

// import { fetchImages } from "./service/ApiService/ApiService";

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
    const { currentPage = 1, pageSize = 10, query = "cat" } = this.state;

    const options = {
      currentPage,
      pageSize,
      query,
    };
    const ApiKey = "21072245-3acfda09a1d5bc65070e6b336";
    const URL = `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=${pageSize}`;

    this.setState({ isLoading: true });

    axios
      .get(URL)
      .then(({ data }) => data.hits)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .finally(() => {
        this.setState({ isLoading: false });

        this.handleToDown();
        // window.scrollTo({
        //   top: document.querySelector("#root").scrollHeight,
        //   behavior: "smooth",
        // });
      });
  };

  handleToDown = () => {
    window.scrollTo({
      top: document.querySelector("#root").scrollHeight,
      behavior: "smooth",
    });
  };
  handleClickMoreBtn = () => {
    this.setState((prevState) => ({
      ...prevState,
      currentPage: prevState.currentPage + 1,
    }));
  };

  onOpenModal = (e) => {
    this.setState((prevState) => ({
      modalImg: e.target.dataset.source,
      alt: e.target.dataset.title,
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { showModal, filter, images, isLoading, query, modalImg } =
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
          <Modal onOpenModal={this.onOpenModal} modalImg={modalImg} />
        )}
        <Button />
      </div>
    );
  }
}

export default App;
