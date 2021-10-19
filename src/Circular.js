import React from "react";
import { Planet } from "react-planet";
import SearchIcon from "@material-ui/icons/Search";
import "./Circular.css";

export default function Circular() {
  return (
    <div className="main">
      <Planet
        centerContent={
          <div
            style={{
              height: 350,
              width: 350,
              borderRadius: "50%",
              backgroundColor: "#e9ebba",
            }}
          >
            <div className="container">
              <div className="toggle">
                <div className="input-group mb-3 ">
                  <form className="ms-4">
                    <div className="col-auto">
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <SearchIcon />
                          </div>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="inlineFormInputGroup"
                          placeholder="Enter city"
                          autoFocus="on"
                        />
                      </div>
                    </div>
                  </form>
                  <div className="container  main-row ">
                    <div className="row  ">
                      <div className="col-4 mt-4">
                        <ul className="LeftInf">
                          <li className="date" id="date-num">
                            October 4
                          </li>
                          <li className="date " id="date-hour">
                            16:46
                          </li>
                        </ul>
                      </div>
                      <div className="col-4 main-icon">
                        <img
                          src="http://openweathermap.org/img/wn/04d@2x.png"
                          id="icon"
                        />
                      </div>

                      <div className="col-4 mt-4">
                        <ul className="RightInf mt-2">
                          <li>
                            RealFeel: <span id="feels-like">21</span>
                            <sup>°</sup>
                          </li>
                          <li>
                            Wind: NE <span id="wind-km">4</span>km/h
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <ul className="main-bottom-col">
                    <li className="dayName">Monday</li>
                    <li className="weather-forcast">partly sunny</li>
                    <li> <span className="temperature">35</span>
                    <span className="units">°c</span> </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="menu" id="menu"></div>
          </div>
        }
        open
        orbitRadius={300}
        hideOrbit
        mass={4}
        tension={500}
        friction={19}
        autoClose
      >
        <div
          className="small-circles"
          id="left-bottom"
          style={{
            height: 200,
            width: 200,

            backgroundColor: "#e9ebba",
          }}
        />

        <div
          className="small-circles"
          id="left"
          style={{
            height: 200,
            width: 200,
            /* borderRadius: "50%",*/
            backgroundColor: "#e9ebba",
          }}
        />
        <div
          className="small-circles"
          id="left-top"
          style={{
            height: 200,
            width: 200,
            /*borderRadius: "50%",*/
            backgroundColor: "#e9ebba",
          }}
        />
        <div
          className="small-circles"
          id="top"
          style={{
            height: 200,
            width: 200,
            /*borderRadius: "50%",*/
            backgroundColor: "#e9ebba",
          }}
        />
        <div
          className="small-circles"
          id="right-top"
          style={{
            height: 200,
            width: 200,
            /*orderRadius: "50%",*/
            backgroundColor: "#e9ebba",
          }}
        />
        <div
          className="small-circles"
          id="right"
          style={{
            height: 200,
            width: 200,
            /*orderRadius: "50%",*/
            backgroundColor: "#e9ebba",
          }}
        />
        <div
          className="small-circles"
          id="right-bottom"
          style={{
            height: 200,
            width: 200,
            /*orderRadius: "50%",*/
            backgroundColor: "#e9ebba",
          }}
        />
      </Planet>
    </div>
  );
}
