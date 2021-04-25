import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
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
