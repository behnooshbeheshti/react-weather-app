import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenhiet(event) {
    event.preventDefault();
    setUnit("fahrenhiet");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function Fahrenhiet(event) {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <strong className="temperature">{props.celsius}</strong>
        <span className="units">
          °C|
          <a href="/" onClick={showFahrenhiet}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <strong className="temperature">{Math.round(Fahrenhiet())}</strong>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          |°F
        </span>
      </div>
    );
  }
}
