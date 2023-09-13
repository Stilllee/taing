import React from 'react';
import styles from './Modal.module.scss';

interface IModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: IModalProps) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;
