import { refs } from './refs';

function createGalleryMarkUp(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="photo-card">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
          <div class="info">
            <p class="info-item">
              <i class='material-icons'>thumb_up</i><span> ${likes}</span>
            </p>
            <p class="info-item">
              <b><i class='material-icons'>visibility</i> ${views}</b>
            </p>
            <p class="info-item">
              <b><i class='material-icons'>comment</i> ${comments}</b>
            </p>
            <p class="info-item">
              <b><i class='material-icons'>cloud_download</i> ${downloads}</b>
            </p>
          </div>
        </li>`
    )
    .join('');
}

function renderGalleryMarkUp(images) {
  refs.galleryList.insertAdjacentHTML('beforeend', createGalleryMarkUp(images));
}

function clearGalleryMarkUp() {
  refs.galleryList.innerHTML = '';
}

export { renderGalleryMarkUp, clearGalleryMarkUp };
