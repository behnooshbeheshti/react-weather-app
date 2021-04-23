import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="stockholm" />
        <footer>
          Open-sourced on{" "}
          <a
            href="https://github.com/behnooshbeheshti/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>GitHub</strong>
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://frosty-allen-dcad32.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Netlify</strong>
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
