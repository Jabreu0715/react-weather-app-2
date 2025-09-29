import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          {" "}
          This project was coded by Jennifer Abreu and is open-sourced on{" "}
          <a
            href="https://github.com/Jabreu0715/react-weather-app-2"
            target="_blank"
            rel="noreferrer"
            className="footer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
