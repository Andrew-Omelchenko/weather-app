class WeatherController {
  constructor(doc, wnd) {
    this._doc = doc;
    this._wnd = wnd;
    this._base = extractBase(this._wnd.location.href);
    this._storageService = new StorageService(this._wnd);
    this._favoritesService = new FavoritesService(this._storageService);
    this._historyService = new HistoryService(this._storageService);
    this._weatherService = new WeatherService();
    this._weather = new Weather(mockData, "metric");
    this._screen = new Screen(doc, this._weather, this);
    this._screen.update(this._weather);
  }

  switchUnits(units) {
    this._weather.switchUnits(units, this._screen);
    this._screen.update(this._weather);
  }

  changeLocation(loc) {
    this._weatherService
      .getWeather(loc, this._weather.currentUnits)
      .then(data => {
        this._weather = new Weather(data, this._weather.currentUnits);
        this._screen.update(this._weather);
        this._wnd.history.pushState(
          {},
          this._doc.title,
          this._base + "?city=" + loc
        );
      });
  }

  start(startUrl) {
    let loc = parseLocation(startUrl);
    if (!loc) {
      loc = "Kyiv";
    }
    this.changeLocation(loc);
  }
}
