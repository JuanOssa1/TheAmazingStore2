import React from 'react';
import * as ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

function Backdrop({ onClose }) {
  return <div className={styles.backdrop} onClick={onClose} />;
}
function ModalOverlay({ children }) {
  return <div className={styles.modal}>{children}</div>;
}

const portalElement = document.getElementById('overlays');

export default function Modal({ children, onClose }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}
