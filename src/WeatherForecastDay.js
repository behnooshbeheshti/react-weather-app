import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }

  function maxTemperatureCelsius() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperatureCelsius() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function maxTemperatureFahrenheit() {
    let temperature = Math.round((props.data.temp.max * 9) / 5 + 32);
    return `${temperature}°`;
  }

  function minTemperatureFahrenheit() {
    let temperature = Math.round((props.data.temp.min * 9) / 5 + 32);
    return `${temperature}°`;
  }

  if (props.unit !== "celsius") {
    return (
      <div>
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={52} />
        <div className="WeatherForecast-temp">
          <span className="WeatherForecast-tempMax">
            {maxTemperatureFahrenheit()}
          </span>
          <span className="WeatherForecast-tempMin">
            {minTemperatureFahrenheit()}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={52} />
        <div className="WeatherForecast-temp">
          <span className="WeatherForecast-tempMax">
            {maxTemperatureCelsius()}
          </span>
          <span className="WeatherForecast-tempMin">
            {minTemperatureCelsius()}
          </span>
        </div>
      </div>
    );
  }
}
