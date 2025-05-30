import { fetchImages } from './js/pixabay-api';
import { clearGallery, renderImages, showLoader } from './js/render-functions';
import { getSearchQuery, showErrorMessage } from './js/utils';

const form = document.querySelector('.form');

function onFormSubmit(event) {
  event.preventDefault();

  const searchQuery = getSearchQuery(event.currentTarget);

  if (!searchQuery) {
    showErrorMessage('The search query can not be empty!');

    return;
  }

  form.reset();
  clearGallery();
  showLoader(true);

  fetchImages(searchQuery)
    .then(images => {
      if (!images.length) {
        showErrorMessage(
          'Sorry, there are no images matching your search query. Please, try again!'
        );
        return;
      }

      renderImages(images);
    })
    .catch(error => {
      showErrorMessage(
        error.message || 'Failed to fetch images. Please, try again later!'
      );
      console.error(error);
    })
    .finally(() => showLoader(false));
}

form.addEventListener('submit', onFormSubmit);
