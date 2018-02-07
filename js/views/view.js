class Screen {
  constructor(doc, weather, controller) {
    this._doc = doc;
    this._controller = controller;
    this._weather = weather;
    this._temperatureId = doc.getElementById(ids.temperatureId);
    this._temperatureUnitsId = doc.getElementById(ids.temperatureUnitsId);
    this._tempMinId = doc.getElementById(ids.tempMinId);
    this._tempMinUnitsId = doc.getElementById(ids.tempMinUnitsId);
    this._tempMaxId = doc.getElementById(ids.tempMaxId);
    this._tempMaxUnitsId = doc.getElementById(ids.tempMaxUnitsId);
    this._locationId = doc.getElementById(ids.locationId);
    this._iconId = doc.getElementById(ids.iconId);
    this._descriptionId = doc.getElementById(ids.descriptionId);
    this._humidityId = doc.getElementById(ids.humidityId);
    this._velocityId = doc.getElementById(ids.velocityId);
    this._velocityUnitsId = doc.getElementById(ids.velocityUnitsId);
    this._directionId = doc.getElementById(ids.directionId);
    this._cityListId = doc.getElementById(ids.cityListId);
    this._init();
  }

  _init() {
    let opt = null;
    for (let i = 0; i < cities.length; i++) {
      opt = this._doc.createElement("option");
      opt.value = cities[i];
      this._cityListId.appendChild(opt);
    }

    this._addListeners(this._doc, this._controller);
  }

  _addListeners(doc, controller) {
    // add event listener to Clear button
    doc.getElementById("loc-field").addEventListener("change", function(event) {
      let fld = doc.getElementById("loc-field");
      let loc = fld.value;
      if (loc == "") return;
      controller.changeLocation(loc);
      fld.value = "";
    });

    // add event listener to select element
    doc
      .getElementById("base-units")
      .addEventListener("change", function(event) {
        controller.switchUnits(event.target.value);
      });

    // add event listener to add favorite button
    doc
      .getElementById("add-favorite-btn")
      .addEventListener("click", function(event) {
        controller.addFavorite();
      });

    // add event listener to clear favorites button
    doc
      .getElementById("clear-favorites-btn")
      .addEventListener("click", function(event) {
        controller.clearFavorites();
      });
  }

  update(weather) {
    this._weather = weather;
    this._temperatureId.innerHTML = Math.round(weather.temperature);
    this._temperatureUnitsId.innerHTML = weather.temperatureUnits;
    this._tempMinId.innerHTML = Math.round(weather.tempMin);
    this._tempMinUnitsId.innerHTML = weather.temperatureUnits;
    this._tempMaxId.innerHTML = Math.round(weather.tempMax);
    this._tempMaxUnitsId.innerHTML = weather.temperatureUnits;
    this._locationId.innerHTML = `${weather.location}, ${weather.country}`;
    this._iconId.src = iconLink + weather.weatherState + ".png";
    this._descriptionId.innerHTML = weather.description;
    this._humidityId.innerHTML = weather.humidity;
    this._velocityId.innerHTML = Math.round(weather.velocity);
    this._velocityUnitsId.innerHTML = weather.velocityUnits;
    this._directionId.innerHTML = toVerbose(weather.direction);
  }
}
