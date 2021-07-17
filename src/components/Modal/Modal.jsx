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
    console.log("target", e.target);
    console.log("ct", e.currentTarget);
    if (
      e.code === "Escape" ||
      e.target === e.currentTarget ||
      e.target.nodeName === "BUTTON"
    ) {
      this.props.onOpenModal(e);
    }
  };

  render() {
    const { modalImg, onOpenModal } = this.props;
    return createPortal(
      <div className={styles.Overlay} onClick={onOpenModal}>
        <div className={styles.Modal}>
          {this.props.children}
          <img src={modalImg} alt="" />
          <button type="button" className={styles.ModalCloseBtn}>
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
