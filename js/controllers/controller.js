class WeatherController {
  constructor(doc) {
    this._weatherService = new WeatherService();
    console.log(this._weatherService);
    this._weather = new Weather(mockData, "metric");
    console.log(this._weather);
    this._screen = new Screen(doc, this._weather, this);
    console.log(this._screen);
    this._screen.update(this._weather);
  }

  switchUnits(units) {
    this._weather.switchUnits(units, this._screen);
    this._screen.update(this._weather);
  }

  changeLocation(loc) {
    this._weatherService.getWeather(loc, this._weather.currentUnits).then((data) => {
      this._weather = new Weather(data, this._weather.currentUnits);
      this._screen.update(this._weather);
    });
  }
}