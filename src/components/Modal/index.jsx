import css from './Modal.module.css';
import { useEffect } from 'react';

export const Modal = ({ openModal, children, onClose }) => {
  useEffect(() => {
    const onKeyDown = event => {
      if (event.charCode === 0) {
        onClose();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  if (openModal) {
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          {children}
          <button className={css.closeButton} onClick={onClose}>
            X
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
