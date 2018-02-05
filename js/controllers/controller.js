class WeatherController {
  constructor(weather, screen) {
    this._weather = weather;
    this._screen = screen;
  }

  switchUnits(units) {
    this._weather.switchUnits(units, this._screen);
    this._screen.update(this._weather);
  }
}