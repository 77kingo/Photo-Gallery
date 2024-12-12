const apiKey = 'nOYyI1cJ8xSryxr-BrUfasMAz7p2kPRtnajcaXcz-aE'; // Replace with your Unsplash API Key
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const photoGallery = document.getElementById('photo-gallery');

searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchPhotos(query);
  } else {
    alert('Please enter a search term.');
  }
});

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchBtn.click();
  }
});

async function fetchPhotos(query) {
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayPhotos(data.results);
  } catch (error) {
    console.error('Error fetching photos:', error);
  }
}

function displayPhotos(photos) {
  photoGallery.innerHTML = ''; // Clear previous results
  photos.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.urls.small;
    img.alt = photo.alt_description || 'Photo';
    img.title = photo.alt_description || 'Photo';
    photoGallery.appendChild(img);
  });
}
