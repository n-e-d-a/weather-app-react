import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Circular.css";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }
  function convertToCelssius(event){
      event.preventDefault();
      setUnits("celsius");
  }
  if (units === `celsius`) {
    return (
      <div>
        {" "}
        <span className="temperature">{props.celsius}</span>
        <span className="units">
          °C |{" "}
          <span>
            {" "}
            <a href="/" onClick={convertToFahrenheit} >
              °F
            </a>{" "}
          </span>{" "}
        </span>
      </div>
    );
  } else {
      let fahrenheit=(props.celsius*9)/5+32;
    return (
      <div>
        {" "}
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={convertToCelssius}>
            °C {" "}
          </a>
          <span>|°F</span>
        </span>
      </div>
    );
  }
}
