const weatherContainer = document.querySelector(".weather-container"),
      API = "e8517b49872d238be8baad29b24770f9",
      COORD_CL = "coordination";

function printWeather(weather){
  if (weather === null) {
    weatherContainer.innerHTML = "failed to load weather data";
  }
  else {
    weatherContainer.innerHTML =
    `City : ${weather.name},
     Temp : ${weather.main.temp},
     Weather : ${weather.weather[0].description}`;
  }
}

function saveGeoloacation(coordJson){
  localStorage.setItem(COORD_CL, JSON.stringify(coordJson));
}

function coordFail(error){
  console.log(error);
}

function coordSuccess(geolocation){
  const lat = geolocation.coords.latitude;
  const long = geolocation.coords.longitude;
  const coordInfo = {
    lat,
    long
  }
  saveGeoloacation(coordInfo);
  getWeatherInfo(coordInfo);
}

function getCoordination(){
  navigator.geolocation.getCurrentPosition(coordSuccess, coordFail)
}

function getWeatherInfo(coord) {
  fetch (
    `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.long}&appid=${API}&units=metric`
  ).then(function(res){
    return res.json();
  }).then(function(json){
    printWeather(json);
  });
}

function loadCoord(){
  const curCoord = localStorage.getItem(COORD_CL);
  if (curCoord === null) {
    getCoordination();
  }
  else {
    getWeatherInfo(JSON.parse(curCoord));
  }
}

function init() {
  loadCoord();
}

init();
