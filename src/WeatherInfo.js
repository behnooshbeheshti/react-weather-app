import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-6">
          <div className="mainParameters">
            <h1>{props.data.city}</h1>
            <ul>
              <li>
                <FormatDate date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <br />
            <div className="tempView">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="parameters">
            <div>
              <WeatherIcon code={props.data.icon} size={110} />
              <div className="tempMaxMin">
                <span className="tempMax">{props.data.temperatureMax}° </span>
                <span className="tempMin">{props.data.temperatureMin}°</span>
              </div>
            </div>
            <div>
              <ul>
                <li>
                  Feels like: <span>{props.data.feelslike}°</span>
                </li>
                <li>
                  Humidity: <span>{props.data.humidity}</span>%
                </li>
                <li>
                  Wind: <span>{props.data.wind}</span>km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
