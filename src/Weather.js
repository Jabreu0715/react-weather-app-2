import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a City..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Search"
              className="btn btn-light w-75"
            />
          </div>
        </div>
      </form>
      <h1>New York City</h1>
      <ul>
        <li>Wednesday 11:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="current-weather">
        <div className="row">
          <div className="col-6">
            <img
              src="https://www.gstatic.com/weather/conditions2023/2023.2/svg/mostly_cloudy_day_light.svg"
              alt="Mostly Cloudy"
              className="img-fluid"
            />
            <span className="current-temp">20</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 50%</li>
              <li>Wind: 13 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
