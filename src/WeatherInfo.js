import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";

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
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="col-6">
            <span className="current-conditons">
              <ul>
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
