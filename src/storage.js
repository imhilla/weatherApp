const defaultLocation = localStorage.getItem('place')
  ? JSON.parse(localStorage.getItem('place'))
  : [];

localStorage.setItem('place', JSON.stringify(defaultLocation));
JSON.parse(localStorage.getItem('place'));

const searchLocation = localStorage.getItem('searched')
  ? JSON.parse(localStorage.getItem('searched'))
  : [];
localStorage.setItem('searched', JSON.stringify(searchLocation));
JSON.parse(localStorage.getItem('searched'));


const addAndDisplay = (() => {
  function addDefault() {
    defaultLocation.push('Nairobi')
    console.log(defaultLocation)
  }

  addDefault();
  document.getElementById('formsearch').onsubmit = function (e) {
    let text = document.getElementById('textsearch').value;
    searchLocation.push(text)
    localStorage.setItem('searched', JSON.stringify(searchLocation));
    e.preventDefault()
    return false;
  }

  const clearPage = () => {
    if (window.location.reload) {
      localStorage.clear();
    }
  }
  clearPage()

  return {
    addDefault, clearPage
  };

})();
export default addAndDisplay;
