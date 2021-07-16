import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");
class Modal extends PureComponent {
  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeyDown);
  };

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.handleKeyDown);
  };

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onOpenModal();
    } else if (e.target === e.currentTarget) {
      this.props.onOpenModal();
    }
  };

  render() {
    const { modalImg, onOpenModal } = this.props;
    return createPortal(
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={modalImg} alt="No photo" />
          <button
            type="button"
            className={styles.ModalCloseBtn}
            onClick={onOpenModal}
          >
            x
          </button>
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  modalImg: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default Modal;
