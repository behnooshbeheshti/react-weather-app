import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="float-left">
              <strong className="temperature">{props.data.temperature}</strong>
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
                Feels like: <span>{props.data.feelslike}°</span>
              </li>
              <li>
                Visibility: <span>{props.data.visibility}</span>%
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
  );
}
