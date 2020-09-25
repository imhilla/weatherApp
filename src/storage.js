const searchLocation = localStorage.getItem('searched')
  ? JSON.parse(localStorage.getItem('searched'))
  : [];
localStorage.setItem('searched', JSON.stringify(searchLocation));
JSON.parse(localStorage.getItem('searched'));

const defaultLocal = () => {
  searchLocation.pop()
  searchLocation.push('Nairobi')
}

async function clearPage() {
  if (window.location.reload) {
    localStorage.clear();
  }
}

clearPage().then(defaultLocal())

const addAndDisplay = (() => {
  document.getElementById('formsearch').onsubmit = function (e) {
    let text = document.getElementById('textsearch').value;
    searchLocation.push(text)
    localStorage.setItem('searched', JSON.stringify(searchLocation));
    e.preventDefault()
    return false;
  }

  return {
    defaultLocal, clearPage
  };

})();
export default addAndDisplay;
