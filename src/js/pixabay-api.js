import axios from 'axios';

export function fetchImages(searchQuery) {
  return axios
    .get('https://pixabay.com/api/', {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        key: '50578458-599512b8a758686bbac6d0702',
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits);
}
