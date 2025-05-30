export function fetchImages(searchQuery) {
  const query = new URLSearchParams({
    key: '50578458-599512b8a758686bbac6d0702',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${query.toString()}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch images. Status: ${response.status}`);
      }

      return response.json();
    })
    .then(data => data.hits);
}
