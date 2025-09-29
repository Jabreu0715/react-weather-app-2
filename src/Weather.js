import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      iconUrl: response.data.condition.icon_url,
      description: response.data.condition.description,
      date: "Wednesday 3:30PM",
    });
  }
  if (weatherData.ready) {
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="current-weather">
          <div className="row">
            <div className="col-6">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="img-fluid"
              />
              <span className="current-temp">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 20%</li>
                <li>Humidity: {weatherData.humidity}</li>
                <li>
                  Wind: {weatherData.wind}
                  {""}
                  km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "23ftbd4aecd5fa6f4304ea2800dofdbf";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
