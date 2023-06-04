import { createContext, useContext, useState, useEffect } from "react";
import cities from "../json/cities.json";
import { fetchDays, fetchCurrent } from "../api/api";

const WeatherContext = createContext();

// eslint-disable-next-line react/prop-types
const WeatherProvider =  ({ children }) => {
  const [city, setCity] = useState("Aydın");
  const [weatherData, setWeatherData] = useState([]);
  const [current, setCurrent] = useState([]);
  useEffect(() => {
    let selectCity = cities.filter((item) => item.name === city)[0];
    let key = "a7d438f9ec6a4ac9996195006232004";
    try {
      fetchDays(selectCity, setWeatherData, key)
      fetchCurrent(selectCity, setCurrent, key)
      
    } catch (error) {
      return error
    }
      
  }, [city]);
  //   console.log("***weather data:", weatherData);
  const values = {
    cities,
    city,
    setCity,
    weatherData,
    current,
  };
    if (weatherData.length === 0) {
      return <div>Loading...</div>;
    }
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

const useWeatherContext = () => useContext(WeatherContext);

// eslint-disable-next-line react-refresh/only-export-components
export { WeatherProvider, useWeatherContext };
