// Screen class
var Screen = function(doc) {
  this.doc = doc;
  this.currentUnits = "si-base-units";
  this.temperatureUnits = "C";
  this.velocityUnits = "m/s";
  this.temperatureId = doc.getElementById("temperature");
  this.temperatureUnitsId = doc.getElementById("temperature-units");
  this.tempMinId = doc.getElementById("temp-min");
  this.tempMinUnitsId = doc.getElementById("temp-min-units");
  this.tempMaxId = doc.getElementById("temp-max");
  this.tempMaxUnitsId = doc.getElementById("temp-max-units");
  this.locationId = doc.getElementById("location");
  this.iconId = doc.getElementById("icon");
  this.descriptionId = doc.getElementById("description");
  this.humidityId = doc.getElementById("humidity");
  this.velocityId = doc.getElementById("velocity");
  this.velocityUnitsId = doc.getElementById("velocity-units");
  this.directionId = doc.getElementById("direction");
};

Screen.prototype.init = function() {
  var dataList = document.getElementById("list-of-cities");
  var opt = null;
  for (var i = 0; i < cities.length; i++) {
    opt = document.createElement("option");
    opt.value = cities[i];
    dataList.appendChild(opt);
  }
};

function updateScreen(screen, weather) {
  screen.temperatureId.innerHTML = Math.round(weather.temperature);
  screen.temperatureUnitsId.innerHTML = screen.temperatureUnits;
  screen.tempMinId.innerHTML = Math.round(weather.tempMin);
  screen.tempMinUnitsId.innerHTML = screen.temperatureUnits;
  screen.tempMaxId.innerHTML = Math.round(weather.tempMax);
  screen.tempMaxUnitsId.innerHTML = screen.temperatureUnits;
  screen.locationId.innerHTML = weather.location;
  screen.iconId.src = iconLink + weather.weatherState + ".png";
  screen.descriptionId.innerHTML = weather.description;
  screen.humidityId.innerHTML = weather.humidity;
  screen.velocityId.innerHTML = Math.round(weather.velocity);
  screen.velocityUnitsId.innerHTML = screen.velocityUnits;
  screen.directionId.innerHTML = toVerbose(weather.direction);
  if (screen.currentUnits == "us-customary-units") {
    screen.temperatureId.innerHTML = toFahrenheit(screen.temperatureId.innerHTML);
    screen.tempMinId.innerHTML = toFahrenheit(screen.tempMinId.innerHTML);
    screen.tempMaxId.innerHTML = toFahrenheit(screen.tempMaxId.innerHTML);
    screen.velocityId.innerHTML = toMph(screen.velocityId.innerHTML);
  }
};