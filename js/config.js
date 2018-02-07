const key = "c7dc2200f66725961863fb901fd1e553";
const apiLink = "https://api.openweathermap.org/data/2.5/weather?";
const iconLink = "http://openweathermap.org/img/w/";

const limit = 30;

// Unit systems
const unitSystems = {
  metric: {
    name: "metric",
    temperatureUnit: "C",
    velocityUnit: "m/s"
  },
  imperial: {
    name: "imperial",
    temperatureUnit: "F",
    velocityUnit: "mph"
  }
};

// List of verbose directions
const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

// Mock weather data
const mockData = {
  coord: { lon: 30.52, lat: 50.45 },
  weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
  base: "stations",
  main: {
    temp: -4.66,
    pressure: 1019,
    humidity: 57,
    temp_min: -5,
    temp_max: -4
  },
  visibility: 10000,
  wind: { speed: 4, deg: 320 },
  clouds: { all: 0 },
  dt: 1517839200,
  sys: {
    type: 1,
    id: 7358,
    message: 0.0018,
    country: "UA",
    sunrise: 1517808362,
    sunset: 1517842714
  },
  id: 703448,
  name: "Kyiv",
  cod: 200
};

// ids of elements
const ids = {
  locFieldId: "loc-field",
  baseUnitsId: "base-units",
  temperatureId: "temperature",
  temperatureUnitsId: "temperature-units",
  addFavoriteBtnId: "add-favorite-btn",
  tempMinId: "temp-min",
  tempMinUnitsId: "temp-min-units",
  tempMaxId: "temp-max",
  tempMaxUnitsId: "temp-max-units",
  locationId: "location",
  iconId: "icon",
  descriptionId: "description",
  humidityId: "humidity",
  velocityId: "velocity",
  velocityUnitsId: "velocity-units",
  directionId: "direction",
  cityListId: "list-of-cities",
  favoritesFieldId: "favorites-field",
  favoritesListId: "favorites-lst",
  clearFavoritesBtnId: "clear-favorites-btn",
  historyFieldId: "history-field",
  historyListId: "history-lst",
  clearHistoryBtnId: "clear-history-btn"
};

// List of cities
const cities = [
  "Kyiv",
  "Alchevsk",
  "Antratsyt",
  "Artemivsk",
  "Berdiansk",
  "Berdychiv",
  "Bila Tserkva",
  "Bilhorod-Dnistrovskyi",
  "Boryslav",
  "Boryspil",
  "Brianka",
  "Brovary",
  "Cherkasy",
  "Chernihiv",
  "Chernivtsi",
  "Chervonohrad",
  "Dniprodzerzhynsk",
  "Dnipropetrovsk",
  "Donetsk",
  "Drohobych",
  "Druzhkivka",
  "Dubno",
  "Dymytrov",
  "Dzerzhynsk",
  "Dzhankoy",
  "Enerhodar",
  "Evpatoria",
  "Fastiv",
  "Feodosia",
  "Horlivka",
  "Illichivsk",
  "Inhulets",
  "Ivano-Frankivsk",
  "Izium",
  "Izmail",
  "Kakhovka",
  "Kalush",
  "Kamianets-Podilskyi",
  "Kerch",
  "Kharkiv",
  "Khartsyzk",
  "Kherson",
  "Khmelnytskyi",
  "Kirovohrad",
  "Kolomyia",
  "Komsomolsk",
  "Konotop",
  "Korosten",
  "Kostiantynivka",
  "Kotovsk",
  "Kovel",
  "Kramatorsk",
  "Krasnoarmiysk",
  "Krasnodon",
  "Krasnyi Luch",
  "Kremenchuk",
  "Kryvyi Rih",
  "Kuznetsovsk",
  "Lozova",
  "Lubny",
  "Luhansk",
  "Lutsk",
  "Lviv",
  "Lysychansk",
  "Makiivka",
  "Marhanets",
  "Mariupol",
  "Melitopol",
  "Mukachevo",
  "Mykolaiv",
  "Myrhorod",
  "Nikopol",
  "Nizhyn",
  "Nova Kakhovka",
  "Novohrad-Volynskyi",
  "Novomoskovsk",
  "Novovolynsk",
  "Odesa",
  "Okhtyrka",
  "Oleksandriia",
  "Ordzhonikidze",
  "Pavlohrad",
  "Pervomaisk",
  "Pervomaisk",
  "Poltava",
  "Pryluky",
  "Rivne",
  "Romny",
  "Rovenky",
  "Rubizhne",
  "Sambir",
  "Sevastopol",
  "Severodonetsk",
  "Shakhtarsk",
  "Shepetivka",
  "Shostka",
  "Simferopol",
  "Sloviansk",
  "Smila",
  "Snizhne",
  "Stakhanov",
  "Stryi",
  "Sumy",
  "Sverdlovsk",
  "Svitlovodsk",
  "Ternopil",
  "Tokmak",
  "Torez",
  "Uman",
  "Uzhhorod",
  "Vinnytsia",
  "Volodymyr-Volynskyi",
  "Voznesensk",
  "Yalta",
  "Yenakiieve",
  "Yuzhnoukrainsk",
  "Zaporizhzhya",
  "Zhmerynka",
  "Zhovti Vody",
  "Zhytomyr"
];
