function getWeather(loc) {
  var url = apiLink + "q=" + loc + "&units=metric&APPID=" + key;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, true);
  var messageShown = false;
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.status == 404 && !messageShown) {
      alert("City not found!")
      messageShown = true;
      return;
    }
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var data = JSON.parse(xmlhttp.responseText);
      var weatherObject = new Weather();
      weatherObject.weatherState = data.weather[0].icon;
      weatherObject.temperature = data.main.temp;
      weatherObject.tempMin = data.main.temp_min;
      weatherObject.tempMax = data.main.temp_max;
      weatherObject.location = data.name;
      weatherObject.description = data.weather[0].main;
      weatherObject.humidity = data.main.humidity;
      weatherObject.velocity = data.wind.speed;
      weatherObject.direction = data.wind.deg;
      updateScreen(currentScreen, weatherObject);
    }
  };
  xmlhttp.send();
};