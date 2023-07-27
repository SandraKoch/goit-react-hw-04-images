import { Modal } from 'components/Modal';
import css from './ImageGalleryItem.module.css';
import { useState } from 'react';

export const ImageGalleryItem = props => {
  const [isOpened, setIsOpened] = useState(false);

  const openModalFn = () => {
    setIsOpened(true);
  };

  const closeModalFn = () => {
    setIsOpened(false);
  };

  const { webformatURL, largeImageURL, tags } = props.item;

  return (
    <>
      <li className={css.galleryItem}>
        <img
          className={css.galleryImage}
          onClick={openModalFn}
          src={webformatURL}
          alt={tags}
        />
      </li>
      <Modal openModal={isOpened} onClose={closeModalFn}>
        <img src={largeImageURL} alt={tags} />
      </Modal>
    </>
  );
};
