class WeatherService {
  constructor() {}

  getWeather(city, units) {
    let url = apiLink + "q=" + city + "&type=like&units=" + units + "&APPID=" + key;
    let init = {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
      cache: "default",
      credentials: "omit"
    };
    return fetch(url, init)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
