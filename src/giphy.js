const giphy = (() => {
  const img = document.querySelector('img');
  async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=ucKwEuUMMg7PY1Qdv2AGIokrGfc0zbGH&s=fighting', { mode: 'cors' });
    const catData = await response.json();
    img.src = catData.data.images.original.url;
  }

  getCats()
})();

export default giphy;
