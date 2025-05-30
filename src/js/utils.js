import iziToast from 'izitoast';

export function showErrorMessage(message) {
  iziToast.error({
    message,
    position: 'topRight',
    class: 'error-message',
    messageColor: '#fff',
    iconColor: '#fff',
    backgroundColor: '#EF4040',
    progressBarColor: '#B51B1B',
    maxWidth: 432,
  });
}

export function getSearchQuery(form) {
  const { search } = Object.fromEntries(new FormData(form));

  return search.trim();
}
