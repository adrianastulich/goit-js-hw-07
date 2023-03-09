import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallerySection = document.querySelector('.gallery')
const markup = galleryItems
    .map(({ preview, original, description }) => 
      `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`)
    .join('')


gallerySection.insertAdjacentHTML('afterbegin', markup);
gallerySection.addEventListener('click', onImageClick)


function onImageClick(e) {
  e.preventDefault()
  if (e.target.nodeName !== 'IMG') {
    return
  }
  modalOpen(e)
}

function modalOpen(e) {
  const galleryItemOriginal = e.target.dataset.source
  const modal = basicLightbox.create(`<img src="${galleryItemOriginal}" width="1024" height="600">`)
  modal.show()

  function closeModalOnEsc(e) {
    if (e.code !== 'Escape') {
      return
    }
    console.log('key');
    modal.close()
    window.removeEventListener('keydown', closeModalOnEsc);
  }
  window.addEventListener('keydown', closeModalOnEsc)
}
