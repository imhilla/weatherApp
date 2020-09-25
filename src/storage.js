const searchLocation = localStorage.getItem('searched')
  ? JSON.parse(localStorage.getItem('searched'))
  : [];
localStorage.setItem('searched', JSON.stringify(searchLocation));
JSON.parse(localStorage.getItem('searched'));

const defaultLocal = () => {
  if (searchLocation.length < 1) {
    searchLocation.push('Nairobi')
    console.log(searchLocation)
    localStorage.setItem('searched', JSON.stringify(searchLocation));
  }
}
defaultLocal()

const addAndDisplay = (() => {
  document.getElementById('formsearch').onsubmit = function () {
    let text = document.getElementById('textsearch').value;
    searchLocation.push(text)
    localStorage.setItem('searched', JSON.stringify(searchLocation));
    window.location.reload
    return false;
  }

  return {
    defaultLocal
  };

})();
export default addAndDisplay;
