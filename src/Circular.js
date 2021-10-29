import React, { useState } from "react";
import { Planet } from "react-planet";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import "./Circular.css";
import Weatherinfo from "./Weatherinfo";
import WeatherIcon from "./WeatherIcon";

export default function Circular(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [forcast, setForcast] = useState();
  const [loaded, setLodead] = useState(false);

  function ForcastResponse(response) {
    setForcast(response.data.daily);
    setLodead(true);
    // console.log(forcast[0].temp.max);
  }

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
    setLatitude(response.data.coord.lat);
    setLongitude(response.data.coord.lon);
    
  }

  // function Search2(){

  //   console.log(latitude);
  //   console.log(longitude);
  //   let apiKeyF = "04b56cea58af88ba207e488d6cd103c8";
  //   let apiUrlF = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKeyF}&units=metric`;
  //   axios.get(apiUrlF).then(ForcastResponse);
  // }

  function Search() {
    const apiKey = "20293e98d70925447c2442cb9db0edda";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(city);
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
    let apiUrlF = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrlF).then(ForcastResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
    //search city
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready && loaded) {
    return (
      <div className="weather">
        <div className="main">
          <Planet
            centerContent={
              <div
                style={{
                  height: 350,
                  width: 350,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255 ,255 , 0, 0.3)",
                }}
              >
                <Weatherinfo data={weatherData} />
                <div className="container">
                  <div className="toggle">
                    <div className="input-group mb-3 ">
                      <form className="ms-4" onSubmit={handleSubmit}>
                        <div className="col-auto">
                          <div className="input-group mb-2">
                            <div className="input-group-prepend">
                              <div
                                className="input-group-text"
                                // onClick={handleSubmit}
                              >
                                <SearchIcon />
                              </div>
                            </div>

                            <input
                              type="text"
                              className="form-control"
                              id="inlineFormInputGroup"
                              placeholder="Enter city"
                              autoFocus="on"
                              onChange={handleCityChange}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* <div className="menu" id="menu"></div> */}
              </div>
            }
            openByClick
            orbitRadius={300}
            hideOrbit
            mass={4}
            tension={500}
            friction={19}

            // autoClose
          >
            <div
              className="small-circles"
              id="left-bottom"
              style={{
                height: 200,
                width: 200,

                backgroundColor: "rgba(255 , 255 , 0 , 0.3)",
              }}
            >
              <div className="left-bottom-writting">
                <div
                  className="WeatherForcasrDay"
                  id="WeatherForcasrDay-left-bottom"
                >
                  Thu
                </div>

                <div className="WeatherForcast-temperatures">
                  <span
                    className="WeatherForcast-temperatures-max"
                    id="WeatherForcast-temperatures-max-left-bottom"
                  >
                    {Math.round(forcast[0].temp.max)}°
                  </span>
                  <span
                    className="WeatherForcast-temperatures-min"
                    id="WeatherForcast-temperatures-min-left-bottom"
                  >
                    {Math.round(forcast[0].temp.min)}°
                  </span>
                </div>
                <span id="left-bottom-icon">
                  <WeatherIcon code="01d" />
                </span>
              </div>
            </div>

            <div
              className="small-circles"
              id="left"
              style={{
                height: 200,
                width: 200,
                /* borderRadius: "50%",*/
                backgroundColor: "rgba(255 , 255 , 0 , 0.3)",
              }}
            >
              <div className="left-writting">
                <span id="left-icon">
                  <WeatherIcon code="01d" />
                </span>
                <span className="WeatherForcasrDay" id="WeatherForcasrDay-left">
                  Thu
                </span>

                <span
                  className="WeatherForcast-temperatures-max"
                  id="WeatherForcast-temperatures-max-left"
                >
                  19°
                </span>
                <span
                  className="WeatherForcast-temperatures-min"
                  id="WeatherForcast-temperatures-min-left"
                >
                  10°
                </span>
              </div>
            </div>
            <div
              className="small-circles"
              id="left-top"
              style={{
                height: 200,
                width: 200,
                /*borderRadius: "50%",*/
                backgroundColor: "rgba(255 , 255 , 0 , 0.3)",
              }}
            >
              <div className="left-top-writting">
                <span id="left-top-icon">
                  <WeatherIcon code="01d" />
                </span>
                <div
                  className="WeatherForcasrDay"
                  id="WeatherForcasrDay-left-top"
                >
                  Thu
                </div>

                <div className="WeatherForcast-temperatures">
                  <span
                    className="WeatherForcast-temperatures-min"
                    id="WeatherForcast-temperatures-min-left-top"
                  >
                    10°
                  </span>
                  <span
                    className="WeatherForcast-temperatures-max"
                    id="WeatherForcast-temperatures-max-left-top"
                  >
                    19°
                  </span>
                </div>
              </div>
            </div>
            <div
              className="small-circles"
              id="top"
              style={{
                height: 200,
                width: 200,
                /*borderRadius: "50%",*/
                backgroundColor: "rgba(255 , 255 , 0 , 0.3)",
              }}
            >
              <div className="top-writing">{weatherData.city}</div>
            </div>
            <div
              className="small-circles"
              id="right-top"
              style={{
                height: 200,
                width: 200,
                /*orderRadius: "50%",*/
                backgroundColor: "rgba(255 , 255 , 0 , 0.3)",
              }}
            >
              <div className="right-top-writting">
                <div className="WeatherForcast-temperatures">
                  <span
                    className="WeatherForcast-temperatures-min"
                    id="WeatherForcast-temperatures-min-right-top"
                  >
                    10°
                  </span>
                  <span
                    className="WeatherForcast-temperatures-max"
                    id="WeatherForcast-temperatures-max-right-top"
                  >
                    19°
                  </span>
                  <span
                    className="WeatherForcasrDay"
                    id="WeatherForcasrDay-right-top"
                  >
                    Thu
                  </span>
                  <span id="right-top-icon">
                    <WeatherIcon code="01d" />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="small-circles"
              id="right"
              style={{
                height: 200,
                width: 200,
                /*orderRadius: "50%",*/
                backgroundColor: "rgba(255 , 255 , 0 , 0.3)",
              }}
            >
              <div className="right-writting">
                <div className="WeatherForcast-temperatures">
                  <span
                    className="WeatherForcast-temperatures-min"
                    id="WeatherForcast-temperatures-min-right"
                  >
                    10°
                  </span>
                  <span
                    className="WeatherForcast-temperatures-max"
                    id="WeatherForcast-temperatures-max-right"
                  >
                    19°
                  </span>
                  <span
                    className="WeatherForcasrDay"
                    id="WeatherForcasrDay-right"
                  >
                    Thu
                  </span>
                  <span id="right-icon">
                    <WeatherIcon code="01d" />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="small-circles"
              id="right-bottom"
              style={{
                height: 200,
                width: 200,
                /*orderRadius: "50%",*/
                backgroundColor: "rgba(255 , 255 , 0 , 0.3)",
              }}
            >
              <div className="right-bottom-writting">
                <div
                  className="WeatherForcasrDay"
                  id="WeatherForcasrDay-right-bottom"
                >
                  Thu
                </div>

                <div className="WeatherForcast-temperatures">
                  <span
                    className="WeatherForcast-temperatures-max"
                    id="WeatherForcast-temperatures-max-right-bottom"
                  >
                    19°
                  </span>
                  <span
                    className="WeatherForcast-temperatures-min"
                    id="WeatherForcast-temperatures-min-right-bottom"
                  >
                    10°
                  </span>
                </div>
                <span id="right-bottom-icon">
                  <WeatherIcon code="01d" />
                </span>
              </div>
            </div>
          </Planet>
        </div>
      </div>
    );
  } else {
    Search();

    return "loding...";
  }
}
