import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallerySection = document.querySelector('.gallery')
const markup = galleryItems
    .map(({ preview, original, description }) => 
      `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`)
    .join('')


gallerySection.insertAdjacentHTML('afterbegin', markup);

const lightbox = new SimpleLightbox('.gallery a', {
    overlayOpacity: 0.9,
    captionsData: 'alt',
    captionDelay: 400,
    animationSpeed: 400,


});
