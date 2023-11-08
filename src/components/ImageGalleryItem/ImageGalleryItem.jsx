import { useState } from 'react';
import { ModalComponent } from '../ModalComponent';
import { StyledGalleryItem } from './ImageGalleryItem.styled';
import { StyledGalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = image => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('qwe');
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <StyledGalleryItem onClick={openModal}>
        <StyledGalleryImage
          src={image.image.webformatURL}
          alt={image.image.tags}
        />
      </StyledGalleryItem>
      <ModalComponent
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        image={image}
      />
    </>
  );
};
