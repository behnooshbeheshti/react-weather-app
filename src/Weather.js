import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Thursday 15:00",
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      feelslike: Math.round(response.data.main.feels_like),
      visibility: response.data.visibility / 100,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Current"
                className="btn btn-success w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            Last updated: <span>{weatherData.data}</span>
          </li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
                alt="Rain"
                className="float-left"
              />
              <div className="float-left">
                <strong className="temperature">
                  {weatherData.temperature}
                </strong>
                <span className="units">
                  <a href="/">°C</a>|<a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="parameters">
              <ul>
                <li>
                  Feels like: <span>{weatherData.feelslike}</span>
                </li>
                <li>
                  Visibility: <span>{weatherData.visibility}</span>%
                </li>
                <li>
                  Humidity: <span>{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind: <span>{weatherData.wind}</span>km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "65ce7574d4f259033178f9fae0906779";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return <div>Loading . . .</div>;
  }
}
