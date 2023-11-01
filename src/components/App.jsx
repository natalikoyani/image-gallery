import { useEffect, useState } from 'react';
import { fetchImages } from 'components/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { StyledApp } from './App.styled';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    async function getImages() {
      try {
        setLoading(true);
        const fetchedImages = await fetchImages(query, page);
        setImages(prevImages => [...prevImages, ...fetchedImages.hits]);
        setShowBtn(page < Math.ceil(fetchedImages.totalHits / 12));
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (query !== '') {
      getImages();
    }
  }, [query, page]);

  const handleSubmit = inputValue => {
    setQuery(inputValue);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <StyledApp>
      <Searchbar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && <Loader />}
      {showBtn && <Button onClick={handleLoadMore}>Load more</Button>}
    </StyledApp>
  );
};
