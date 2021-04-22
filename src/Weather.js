import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Stockholm</h1>
      <ul>
        <li>
          Last updated: <span>Thursday 15:00</span>
        </li>
        <li>Rain</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
            alt="Rain"
          />
          <strong>2</strong>
          <span>
            <a href="/">°C</a>|<a href="/">°F</a>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Feels like: <span>1</span>
            </li>
            <li>
              Visibility: <span>20</span>%
            </li>
            <li>
              Humidity: <span>94</span>%
            </li>
            <li>
              Wind: <span>6</span>km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
