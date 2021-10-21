import React from "react";
import FormatedDate from "./FormatedDate";
import FormatedMonth from "./FormatedMonth";
import "./Circular.css";

export default function Weatherinfo(props){
   
    return (
      <div className="container toggle ">
        <div className="container  ">
          <div className="row   main-row">
            <div className="col-4 mt-4 LeftInf">
              <FormatedMonth date={props.data.date} />
            </div>
            <div className="col-4 main-icon">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                id="icon"
              />
            </div>

            <div className="col-4 mt-4">
              <ul className="RightInf mt-2">
                <li>
                  Humidity: <span id="feels-like">{props.data.humidity}</span>
                  <sup>°</sup>
                </li>
                <li>
                  Wind: <span id="wind-km">{props.data.wind}</span>km/h
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ul className="main-bottom-col">
          <li className="text-capitalize">
            <FormatedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
          <li>
            {" "}
            <span className="temperature">{props.data.temperature}</span>
            <span className="units">°c</span>{" "}
          </li>
        </ul>
      </div>
    );
}