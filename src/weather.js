const weather = (() => {
  async function getLocation() {
    try {
      const locations = JSON.parse(localStorage.getItem(localStorage.key(localStorage.length - 3)));
      const units = JSON.parse(localStorage.getItem(localStorage.key(localStorage.length - 1)));
      const actualUnit = units[units.length - 1];
      const actualLocation = locations[locations.length - 1];
      let unitOfMes;
      let inCOrF;
      if (actualUnit === 'celsius') {
        unitOfMes = 'units=metric';
        inCOrF = '°C';
      } else if (actualUnit === 'fahrenheit') {
        unitOfMes = 'units=imperial';
        inCOrF = 'F';
      }
      const feedBack = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${actualLocation}&${unitOfMes}&appid=a575049b71ed2b88749a1f238d71e50b`, { mode: 'cors' });
      const weatherData = await feedBack.json();
      const data = weatherData;
      const dataDesc = data.weather[0];
      const store = JSON.parse(localStorage.getItem('desc'));
      const says = dataDesc.description;
      store.push(says);
      localStorage.setItem('desc', JSON.stringify(store));
      const weatherContainer = document.getElementById('weather-container');
      const subContainer = document.createElement('div');
      subContainer.setAttribute('class', 'sub-container');
      subContainer.innerHTML = `   
      <div class='d-flex'><h3 class='mr-2'>City: </h3><h3>${data.name}</h3></div>
      <div class='d-flex'><h4 class='mr-2'>Description: </h4><h4>${dataDesc.description}</h4></div>
      <div class='d-flex'><h5>Average temperature: </h5><p>${data.main.temp}${inCOrF}</p></div>
      <div class='d-flex'><h5>Feels like: </h5><p>${data.main.feels_like}${inCOrF}</p></div>
      <div class='d-flex'><h5>Minimum-temp: </h5><p>${data.main.temp_min}${inCOrF}</p></div>
      <div class='d-flex'><h5>Maximum-temp: </h5><p>${data.main.temp_max}${inCOrF}</p></div>
      <div class='d-flex'><h5>Pressure: </h5><p>${data.main.pressure} mbar</p></div>`;
      weatherContainer.append(subContainer);
    } catch (err) {
      alert(err);
    }
  }
  getLocation();
})();
export default weather;