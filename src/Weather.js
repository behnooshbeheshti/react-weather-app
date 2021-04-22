import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Stockholm</h1>
      <ul>
        <li>
          Last updated: <span>Thursday 15:00</span>
        </li>
        <li>Rain</li>
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
              <strong className="temperature">2</strong>
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
    </div>
  );
}
