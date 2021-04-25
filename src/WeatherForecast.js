import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <WeatherForecastDay data={forecast[0]} />
          <WeatherForecastDay data={forecast[1]} />
          <WeatherForecastDay data={forecast[2]} />
          <WeatherForecastDay data={forecast[3]} />
          <WeatherForecastDay data={forecast[4]} />
        </div>
      </div>
    );
  } else {
    const apiKey = "65ce7574d4f259033178f9fae0906779";
    let units = "metric";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
