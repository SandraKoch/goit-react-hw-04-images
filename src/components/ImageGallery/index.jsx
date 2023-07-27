import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = props => {
  return (
    <ul className={css.gallery}>
      {props.images.map(image => (
        <ImageGalleryItem key={image.id} item={image} />
      ))}
    </ul>
  );
};
