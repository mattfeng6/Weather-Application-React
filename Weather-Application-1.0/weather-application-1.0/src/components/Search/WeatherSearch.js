import React, { useState } from "react";

import "./WeatherSearch.css";
import Card from "../../UI/Card";

const api = {
  key: "9f4d7742b358d5261e8cd49c4b473381",
  base: "https://api.openweathermap.org/data/2.5/",
};

const WeatherSearch = (props) => {
  const [query, setQuery] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setCurrentWeather(result);
          setQuery("");
        });

      const weatherData = {
        name: currentWeather.name,
        coun: currentWeather.sys.country,
        temp: currentWeather.main.temp,
        status: currentWeather.weather[0].main,
      };

      props.onSaveWeatherData(weatherData);
      setQuery("");
    }
  };

  return (
    <div>
      <Card className="weather-search">
        <input
          type="test"
          className="search-bar"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </Card>
    </div>
  );
};

export default WeatherSearch;
