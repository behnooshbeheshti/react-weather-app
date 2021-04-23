import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormatDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <hr />
          <div className="parameters">
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
        <div className="col-6">
          <div className="clearfix">
            <div className="tempIcon">
              <div className="float-right tempView">
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
              <div className="float-right">
                <WeatherIcon code={props.data.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
