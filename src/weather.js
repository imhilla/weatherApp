const weather = (() => {
  async function getLocation() {
    const locations = JSON.parse(localStorage.getItem(localStorage.key(localStorage.length - 2)))
    const units = JSON.parse(localStorage.getItem(localStorage.key(localStorage.length - 1)))
    const actualUnit = units[units.length - 1]
    var actualLocation = locations[locations.length - 1]
    let unitOfMes
    let inCOrF
    if (localStorage.unit.length == 0) {
      unitOfMes = 'units=metric'
      inCOrF = 'F'
      console.log(inCOrF)
    } else if (actualUnit == 'celsius') {
      unitOfMes = 'units=metric'
      inCOrF = '°C'
      console.log(inCOrF)
    } else if (actualUnit == 'fahrenheit') {
      unitOfMes = 'units=imperial'
      inCOrF = 'F'
      console.log(inCOrF)
    }
    const feedBack = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${actualLocation}&${unitOfMes}&appid=a575049b71ed2b88749a1f238d71e50b`, { mode: 'cors' });
    const weatherData = await feedBack.json();
    var data = weatherData
    const dataDesc = data.weather[0]
    const weatherContainer = document.getElementById('weather-container')
    const subContainer = document.createElement('div')
    subContainer.setAttribute('class', 'sub-container')
    subContainer.innerHTML = `   
      <div class='d-flex'><h3 class='mr-2'>City: </h3><h3>${data.name}</h3></div>
      <div class='d-flex'><h4 class='mr-2'>Description: </h4><h4>${dataDesc.description}</h4></div>
      <div class='d-flex'><h5>Average temperature: </h5><p>${data.main.temp}${inCOrF}</p></div>
      <div class='d-flex'><h5>Feels like: </h5><p>${data.main.feels_like}</p></div>
      <div class='d-flex'><h5>Minimum-temp: </h5><p>${data.main.temp_min}</p></div>
      <div class='d-flex'><h5>Maximum-temp: </h5><p>${data.main.temp_max}</p></div>
      <div class='d-flex'><h5>Pressure: </h5><p>${data.main.pressure} mbar</p></div>`
    weatherContainer.append(subContainer)
  }
  getLocation();
})();
export default weather