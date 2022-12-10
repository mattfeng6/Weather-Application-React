import React, { useState } from "react";
import WeatherItem from "./WeatherItem";

import './WeatherList.css'

const WeatherList = (props) => {
  return (
    <ul className="list">
      {props.items.map((weather) => (
        <WeatherItem
          id={weather.id}
          name={weather.name}
          coun={weather.coun}
          temp={weather.temp}
          status={weather.status}
        />
      ))}
    </ul>
  );
};

export default WeatherList;
