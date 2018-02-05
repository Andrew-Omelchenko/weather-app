class Screen {
  constructor(doc) {
    this._doc = doc;
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
  }

  update(weather) {
    this._temperatureId.innerHTML = Math.round(weather.temperature);
    this._temperatureUnitsId.innerHTML = weather.temperatureUnits;
    this._tempMinId.innerHTML = Math.round(weather.tempMin);
    this._tempMinUnitsId.innerHTML = this._temperatureUnits;
    this._tempMaxId.innerHTML = Math.round(weather.tempMax);
    this._tempMaxUnitsId.innerHTML = this._temperatureUnits;
    this._locationId.innerHTML = weather.location;
    this._iconId.src = iconLink + weather.weatherState + ".png";
    this._descriptionId.innerHTML = weather.description;
    this._humidityId.innerHTML = weather.humidity;
    this._velocityId.innerHTML = Math.round(weather.velocity);
    this._velocityUnitsId.innerHTML = weather.velocityUnits;
    this._directionId.innerHTML = toVerbose(weather.direction);
  }
}
