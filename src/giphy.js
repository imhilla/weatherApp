const giphy = (() => {
  const img = document.querySelector('img');
  async function getCats() {
    try {
      const store = JSON.parse(localStorage.getItem('desc'));
      const type = store[store.length - 1];
      const lasttype = type.split(' ');
      const last = lasttype[lasttype.length - 1];
      const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=ucKwEuUMMg7PY1Qdv2AGIokrGfc0zbGH&s=${last}`, { mode: 'cors' });
      const catData = await response.json();
      img.src = catData.data.images.original.url;
    } catch (err) {
      alert(err);
    }
  }

  getCats();
})();

export default giphy;
