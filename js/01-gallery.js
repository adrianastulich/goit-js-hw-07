import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery')
const cardsMarkup = createGalleryCardsMarkup(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onGalleryItemClick)

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
    `
    })
    .join('')
}

function onGalleryItemClick(event) {
  event.preventDefault()

  if (event.target.nodeName !== 'IMG') {
    return
  }

  modalOpen(event)
}



function modalOpen(event) {
  const galleryItemOriginal = event.target.dataset.source

  const modal = basicLightbox.create(`<img src="${galleryItemOriginal}" width="1024" height="600">`)
  modal.show()

  function closeModalOnEsc(event) {
    if (event.code !== 'Escape') {
      return
    }
    console.log('key');
    modal.close()
    window.removeEventListener('keydown', closeModalOnEsc);
  }
  window.addEventListener('keydown', closeModalOnEsc)
}
