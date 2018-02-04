var currentWeatherObject = null;
var currentScreen = null;

window.onload = function() {
  currentScreen = new Screen(document);
  currentScreen.init();
  currentWeatherObject = new Weather();
  getWeather("Kyiv");
  updateScreen(currentScreen, currentWeatherObject);

  // add event listener to Go button
  document.getElementById("go-button").addEventListener("click", function(event) {
    var loc = document.getElementById("loc-field").value;
    if (loc == "") return;
    getWeather(loc);
  });

  // add event listener to Clear button
  document.getElementById("clear-button").addEventListener("click", function(event) {
    var fld = document.getElementById("loc-field");
    fld.value = "";
  });

  // add event listener to select element
  document.getElementById("base-units").addEventListener("click", function(event) {
    switchUnits(currentScreen, event.target.value);
  });
};

