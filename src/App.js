import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/behnooshbeheshti/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Open-source code</strong>
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/behnoosh-beheshti/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behnoosh Beheshti
          </a>
        </footer>
      </div>
    </div>
  );
}
