class Weather {
  constructor(data, units) {
    this._currentUnits = units;
    if (units == "metric") {
      this._currentTemperatureUnits = unitSystems.metric.temperatureUnit;
      this._currentVelocityUnits = unitSystems.metric.velocityUnit;
    } else {
      this._currentTemperatureUnits = unitSystems.imperial.temperatureUnit;
      this._currentVelocityUnits = unitSystems.imperial.velocityUnit;
    }
    this._weatherState = data.weather[0].icon;
    this._temperature = data.main.temp;
    this._tempMin = data.main.temp_min;
    this._tempMax = data.main.temp_max;
    this._location = data.name;
    this._description = data.weather[0].main;
    this._humidity = data.main.humidity;
    this._velocity = data.wind.speed;
    this._direction = data.wind.deg;
  }

  get currentUnits() {
    return this._currentUnits;
  }
  get weatherState() {
    return this._weatherState;
  }
  get temperature() {
    return this._temperature;
  }
  get temperatureUnits() {
    return this._currentTemperatureUnits;
  }
  get tempMin() {
    return this._tempMin;
  }
  get tempMax() {
    return this._tempMax;
  }
  get location() {
    return this._location;
  }
  get description() {
    return this._description;
  }
  get humidity() {
    return this._humidity;
  }
  get velocity() {
    return this._velocity;
  }
  get velocityUnits() {
    return this._currentVelocityUnits;
  }
  get direction() {
    return this._direction;
  }

  switchUnits(units) {
    if (this._currentUnits == units) return;
    if (units == "metric") {
      this._currentUnits = "metric";
      this._temperature = toCelsius(this._temperature);
      this._tempMin = toCelsius(this._tempMin);
      this._tempMax = toCelsius(this._tempMax);
      this._currentTemperatureUnits = unitSystems.metric.temperatureUnit;
      this._velocity = toMs(this._velocity);
      this._currentVelocityUnits = unitSystems.metric.velocityUnit;
    } else if (units == "imperial") {
      this._currentUnits = "imperial";
      this._temperature = toFahrenheit(this._temperature);
      this._tempMin = toFahrenheit(this._tempMin);
      this._tempMax = toFahrenheit(this._tempMax);
      this._currentTemperatureUnits = unitSystems.imperial.temperatureUnit;
      this._velocity = toMph(this._velocity);
      this._currentVelocityUnits = unitSystems.imperial.velocityUnit;
    }
  }
}
