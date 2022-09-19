import React, { useState } from "react";
import "./App.css";

import WeatherDate from "./components/Date/WeatherDate";
import NewWeather from "./components/Search/NewWeather";
import WeatherWidget from "./components/Widget/WeatherWidget";

const DUMMY = [];

const App = () => {
  const [weathers, setWeather] = useState(DUMMY);

  const addWeatherHandler = (weather) => {
    setWeather((prevWeathers) => {
      return [weather, ...prevWeathers];
    });
  };

  return (
    <div className="App">
      <h2>WEATHER APPLICATION</h2>
      <WeatherDate />
      <NewWeather onAddWeather={addWeatherHandler} />
      <WeatherWidget items={weathers} />
    </div>
  );
};

export default App;
