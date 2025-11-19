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
          This project was coded by{" "}
          <a
            href="https://github.com/Jabreu0715"
            target="_blank"
            rel="noopener noreferrer"
            className="footer"
          >
            {" "}
            Jennifer Abreu
          </a>{" "}
          and is open-sourced on{" "}
          <span>
            <a
              href="https://github.com/Jabreu0715/react-weather-app-2"
              target="_blank"
              rel="noopener noreferrer"
              className="footer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://taupe-meerkat-721582.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer"
            >
              Netlify
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}
