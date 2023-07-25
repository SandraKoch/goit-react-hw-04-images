import { Modal } from 'components/Modal';
import css from './ImageGalleryItem.module.css';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isOpened: false,
  };

  openModalFn = () => {
    this.setState({ isOpened: true });
  };

  closeModalFn = () => {
    this.setState({ isOpened: false });
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.item;
    return (
      <>
        <li className={css.galleryItem}>
          <img
            className={css.galleryImage}
            onClick={this.openModalFn}
            src={webformatURL}
            alt={tags}
          />
        </li>
        <Modal openModal={this.state.isOpened} onClose={this.closeModalFn}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      </>
    );
  }
}
