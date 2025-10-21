import React from "react";
import "./Weather.css";
import { WeatherSvg } from "weather-icons-animated";
export default function WeatherIcon(props) {
  if (props.code === "clear-sky-day")
    return <WeatherSvg state="sunny" width={100} height={100} />;
}
