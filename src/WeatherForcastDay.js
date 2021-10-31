import React from "react";

export default function WeatherForcastDay(props) {
  const date = new Date(props.data.dt * 1000);
  const day = date.getDay();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return <div>{days[day]}</div>;
}
