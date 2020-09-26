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

const desc = localStorage.getItem('desc')
  ? JSON.parse(localStorage.getItem('desc'))
  : [];

localStorage.setItem('desc', JSON.stringify(desc));
JSON.parse(localStorage.getItem('desc'));

const defaultLocal = () => {
  if (localStorage.length < 1) {
    unit.push('celsius')
    searchLocation.push('Nairobi')
    desc.push('clouds')
    localStorage.setItem('desc', JSON.stringify(desc));
    localStorage.setItem('unit', JSON.stringify(unit));
    localStorage.setItem('searched', JSON.stringify(searchLocation));
  }
}

const clear = () => {
  localStorage.clear()
  defaultLocal()
}

clear()

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
