import React, { useState } from "react";

import WeatherSearch from "./WeatherSearch";
import Card from "../../UI/Card";

import "./NewWeather.css";

const NewWeather = (props) => {
  const saveWeatherDataHandler = (currentWeather) => {
    const weatherWithID = {
      ...currentWeather,
      id: Math.random().toString(),
    };
    props.onAddWeather(weatherWithID);
  };

  return (
    <Card className="new-weather">
      <h3 className="text">Type the city</h3>
      <WeatherSearch onSaveWeatherData={saveWeatherDataHandler} />
    </Card>
  );
};

export default NewWeather;