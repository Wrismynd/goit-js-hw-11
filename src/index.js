import { refs } from './js/helpers/refs';
import { loadMoreBtn } from './js/loadMoreBtn';
import { onGalleryFormSubmit } from './js/helpers/handlers';

refs.galleryForm.addEventListener('submit', onGalleryFormSubmit);
