import { useState } from 'react';
import { ModalComponent } from '../ModalComponent';
import { StyledGalleryItem } from './ImageGalleryItem.styled';
import { StyledGalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = image => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  // Добрый день! Модальное окно закрывается по нажатию на Эскейп, но при клике на бэкдроп не закрывается.
  // Но если нажать сначала на бэкдроп, то потом и по эскейпу не работает.
  // Если опять нажать на контент модалки, то закрытие по эскейп снова работает.
  // Такое впечатление, что когда нажимаешь на бэкдроп, то теряется фокус с модалки...
  // Консоль лог срабатывает при клике на бэкдроп.
  // И такая ситуация не только у меня.Обращалась к ментору,
  // он сказал что, возможно, это глюк библиотеки.

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
