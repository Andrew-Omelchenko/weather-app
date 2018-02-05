class Weather {
  constructor(data) {
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

  get weatherState() {
    return this._weatherState;
  }
  get temperature() {
    return this._temperature;
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
  get direction() {
    return this._direction;
  }
}