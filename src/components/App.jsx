import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { Searchbar } from './Searchbar';
import React, { useState } from 'react';
import { fetchImages } from 'api/fetchImages';
import { Loader } from './Loader';

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [loadMoreVisible, setLoadMoreVisible] = useState(false);

  const searchImages = async query => {
    setLoading(true);
    setQuery(query);
    setPage(1);

    const newPage = 1;
    const fetchedData = await fetchImages(query, newPage);
    setLoading(false);
    // console.log(fetchedData);
    const nextImages = fetchedData.hits;
    setImages(nextImages);

    if (fetchedData.totalHits > nextImages.length) {
      setLoadMoreVisible(true);
    }
  };

  const loadMoreFn = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setLoading(true);
    setLoadMoreVisible(false);
    const fetchedData = await fetchImages(query, nextPage);
    const moreImages = fetchedData.hits;
    setLoading(false);

    const nextImages = [...images, ...moreImages];
    setImages(nextImages);

    if (fetchedData.totalHits > nextImages.length) {
      setLoadMoreVisible(true);
    } else {
      setLoadMoreVisible(false);
    }
  };

  return (
    <div>
      <Searchbar onSearch={query => searchImages(query)} />
      <ImageGallery images={images} />
      <Loader visible={loading} />
      {loadMoreVisible && <Button onClick={loadMoreFn} />}
    </div>
  );
};
