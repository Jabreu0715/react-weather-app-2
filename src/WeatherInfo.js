import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="current-weather">
        <div className="row">
          <div className="col-6">
            <div className="img-fluid">
              <WeatherIcon code={props.data.icon} />
            </div>

            <span className="current-temp">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <span className="current-conditons">
              <ul>
                <li>Precipitation: 20%</li>
                <li>Humidity: {props.data.humidity}</li>
                <li>
                  Wind: {props.data.wind}
                  {""}
                  km/h
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
