const searchLocation = localStorage.getItem('searched')
  ? JSON.parse(localStorage.getItem('searched'))
  : [];
localStorage.setItem('searched', JSON.stringify(searchLocation));
JSON.parse(localStorage.getItem('searched'));

const unit = localStorage.getItem('unit')
  ? JSON.parse(localStorage.getItem('unit'))
  : [];

localStorage.setItem('unit', JSON.stringify(unit));
JSON.parse(localStorage.getItem('unit'));

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
    if (document.getElementById('inlineRadio1').checked) {
      let celsius = document.getElementById('inlineRadio1').value;
      unit.push(celsius)
      localStorage.setItem('unit', JSON.stringify(unit));
    } else if (document.getElementById('inlineRadio2').checked) {
      let fahrenheit = document.getElementById('inlineRadio2').value;
      unit.push(fahrenheit)
      localStorage.setItem('unit', JSON.stringify(unit));
    }
    localStorage.setItem('searched', JSON.stringify(searchLocation));
    window.location.reload
  }

  return {
    defaultLocal
  };

})();
export default addAndDisplay;
