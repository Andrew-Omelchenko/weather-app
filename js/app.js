var currentWeatherObject = null;
var currentScreen = null;
var weatherController = null;
var weatherService = new WeatherService();

window.onload = function() {
  currentScreen = new Screen(document);
  currentWeatherObject = new Weather(mockData, "imperial");
  weatherController = new WeatherController(currentWeatherObject, currentScreen);

  currentWeatherObject = weatherService.getWeather("Kyiv", "metric");
  currentScreen.update(currentWeatherObject);

  // add event listener to Go button
  document.getElementById("go-button").addEventListener("click", function(event) {
    var loc = document.getElementById("loc-field").value;
    if (loc == "") return;
    weatherService.getWeather(loc, "metric");
  });

  // add event listener to Clear button
  document.getElementById("clear-button").addEventListener("click", function(event) {
    var fld = document.getElementById("loc-field");
    fld.value = "";
  });

  // add event listener to select element
  document.getElementById("base-units").addEventListener("click", function(event) {
    weatherController.switchUnits(event.target.value);
  });
};

