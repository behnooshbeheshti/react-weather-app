import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    return <div>heloo</div>;
  }
  const apiKey = "65ce7574d4f259033178f9fae0906779";
  let units = "metric";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={48} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-tempMax">10°</span>
            <span className="WeatherForecast-tempMin">8°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
