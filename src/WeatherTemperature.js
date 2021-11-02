import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Circular.css";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("celsius");
  
  
    return (
      <div>
        {" "}
        <span className="temperature">{props.celsius}</span>
        <span className="units">
          °C 
         
        </span>
      </div>
    );
    }
