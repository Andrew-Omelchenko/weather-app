function extractBase(urlString) {
  return urlString.split("?").slice(0, -1);
}

function parseLocation(urlString) {
  let parsed = new URL(urlString);
  return parsed.searchParams.get("city");
}

function toFahrenheit(value) {
  return Math.round(value * 1.8 + 32);
}

function toCelsius(value) {
  return Math.round((value - 32) / 1.8);
}

function toMph(value) {
  return Math.round(value * 2.25);
}

function toMs(value) {
  return Math.round(value / 2.25);
}

function toVerbose(value) {
  var slice = 360 / 8;
  var angle = value % 360;
  for (var i = 0; i < directions.length; i++) {
    if (angle >= slice * (i - 0.5) && angle <= slice * (i + 0.5)) {
      return directions[i];
    }
  }
  return "N";
}
