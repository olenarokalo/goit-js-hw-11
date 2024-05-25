import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { createGalleryItem } from './js/render-functions.js';

const searchBtn = document.querySelector(`.search-btn`);
const searchHolder = document.querySelector(`.form-input`);

searchBtn.addEventListener(`click`, e => {
  e.preventDefault();
});

fetchImages().then(imagesData => {
  const markup = createGalleryItem(imagesData.results);
  console.log(`markup: `, markup);
});
