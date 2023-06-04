import axios from "axios";

export const fetchDays = async (selectCity, setWeatherData, key) => {
  try {
    await axios(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${selectCity.latitude},${selectCity.longitude}&days=7`
    )
      .then((res) => res.data)

      .then((res) => res.forecast)
      .then((res) => setWeatherData(res.forecastday));
  } catch (error) {
    return console.log(error);
  }
};

export const fetchCurrent = async (selectCity, setCurrent, key) => {
  try {
    await axios(
      `https://api.weatherapi.com/v1/current.json?key=${key}&q=${selectCity.latitude},${selectCity.longitude}`
    )
      .then((res) => res.data)

      .then((res) => res.current)
      .then((res) => setCurrent(res));
  } catch (error) {
    return console.log(error);
  }
};
