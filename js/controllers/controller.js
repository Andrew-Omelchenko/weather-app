function switchUnits(screen, units) {
  if (screen.currentUnits == units) return;
  if (units == "si-base-units") {
    screen.currentUnits = "si-base-units";
    screen.temperatureId.innerHTML = toCelsius(screen.temperatureId.innerHTML);
    screen.tempMinId.innerHTML = toCelsius(screen.tempMinId.innerHTML);
    screen.tempMaxId.innerHTML = toCelsius(screen.tempMaxId.innerHTML);
    screen.temperatureUnits = "C";
    screen.velocityId.innerHTML = toMs(screen.velocityId.innerHTML);
    screen.velocityUnits = "m/s";
  } else {
    screen.currentUnits = "us-customary-units";
    screen.temperatureId.innerHTML = toFahrenheit(screen.temperatureId.innerHTML);
    screen.tempMinId.innerHTML = toFahrenheit(screen.tempMinId.innerHTML);
    screen.tempMaxId.innerHTML = toFahrenheit(screen.tempMaxId.innerHTML);
    screen.temperatureUnits = "F";
    screen.velocityId.innerHTML = toMph(screen.velocityId.innerHTML);
    screen.velocityUnits = "mph";

  }
  // TODO: update screen
  screen.temperatureUnitsId.innerHTML = screen.temperatureUnits;
  screen.tempMinUnitsId.innerHTML = screen.temperatureUnits;
  screen.tempMaxUnitsId.innerHTML = screen.temperatureUnits;
  screen.velocityUnitsId.innerHTML = screen.velocityUnits;
};