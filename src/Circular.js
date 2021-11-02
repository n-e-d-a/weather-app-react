import React, { useState , useEffect} from "react";
import { Planet } from "react-planet";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import WeatherForcastDay from "./WeatherForcastDay";
import Weatherinfo from "./Weatherinfo";
import WeatherIcon from "./WeatherIcon";
import "./Circular.css";



export default function Circular(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [forcast, setForcast] = useState(null);
  const [loaded, setLodead] = useState(false);

  

  function ForcastResponse(response) {
    setForcast(response.data.daily);
    setLodead(true);
   }

   function handleResponse(response) {
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

   useEffect(() => {
     if (latitude && longitude) {
       const apiKey = "20293e98d70925447c2442cb9db0edda";
       let apiUrlF = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
       axios.get(apiUrlF).then(ForcastResponse);
     }
   }, [latitude, longitude]);

   function Search() {
     const apiKey = "20293e98d70925447c2442cb9db0edda";
     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleResponse);
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
                                  onClick={handleSubmit}
                              >
                                 <SearchIcon /> 
                                {/* <AiOutlineSearch /> */}
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
            // open
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
                  <WeatherForcastDay data={forcast[3]} />
                </div>

                <div className="WeatherForcast-temperatures">
                  <span
                    className="WeatherForcast-temperatures-max"
                    id="WeatherForcast-temperatures-max-left-bottom"
                  >
                    {Math.round(forcast[3].temp.max)}°
                  </span>
                  <span
                    className="WeatherForcast-temperatures-min"
                    id="WeatherForcast-temperatures-min-left-bottom"
                  >
                    {Math.round(forcast[3].temp.min)}°
                  </span>
                </div>
                <span id="left-bottom-icon">
                  <WeatherIcon code={forcast[3].weather[0].icon} />
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
                  <WeatherIcon code={forcast[4].weather[0].icon} />
                </span>
                <span className="WeatherForcasrDay" id="WeatherForcasrDay-left">
                  <WeatherForcastDay data={forcast[4]} />
                </span>

                <span
                  className="WeatherForcast-temperatures-max"
                  id="WeatherForcast-temperatures-max-left"
                >
                  {Math.round(forcast[4].temp.max)}°
                </span>
                <span
                  className="WeatherForcast-temperatures-min"
                  id="WeatherForcast-temperatures-min-left"
                >
                  {Math.round(forcast[4].temp.min)}°
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
                  <WeatherIcon code={forcast[5].weather[0].icon} />
                </span>
                <div
                  className="WeatherForcasrDay"
                  id="WeatherForcasrDay-left-top"
                >
                  <WeatherForcastDay data={forcast[5]} />
                </div>

                <div className="WeatherForcast-temperatures">
                  <span
                    className="WeatherForcast-temperatures-min"
                    id="WeatherForcast-temperatures-min-left-top"
                  >
                    {Math.round(forcast[5].temp.min)}°
                  </span>
                  <span
                    className="WeatherForcast-temperatures-max"
                    id="WeatherForcast-temperatures-max-left-top"
                  >
                    {Math.round(forcast[5].temp.max)}°
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
                    {Math.round(forcast[0].temp.min)}°
                  </span>
                  <span
                    className="WeatherForcast-temperatures-max"
                    id="WeatherForcast-temperatures-max-right-top"
                  >
                    {Math.round(forcast[0].temp.max)}°
                  </span>
                  <span
                    className="WeatherForcasrDay"
                    id="WeatherForcasrDay-right-top"
                  >
                    <WeatherForcastDay data={forcast[0]} />
                  </span>
                  <span id="right-top-icon">
                    <WeatherIcon code={forcast[0].weather[0].icon} />
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
                    {Math.round(forcast[1].temp.min)}°
                  </span>
                  <span
                    className="WeatherForcast-temperatures-max"
                    id="WeatherForcast-temperatures-max-right"
                  >
                    {Math.round(forcast[1].temp.max)}°
                  </span>
                  <span
                    className="WeatherForcasrDay"
                    id="WeatherForcasrDay-right"
                  >
                    <WeatherForcastDay data={forcast[1]} />
                  </span>
                  <span id="right-icon">
                    <WeatherIcon code={forcast[1].weather[0].icon} />
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
                  <WeatherForcastDay data={forcast[2]} />
                </div>

                <div className="WeatherForcast-temperatures">
                  <span
                    className="WeatherForcast-temperatures-max"
                    id="WeatherForcast-temperatures-max-right-bottom"
                  >
                    {Math.round(forcast[2].temp.max)}°
                  </span>
                  <span
                    className="WeatherForcast-temperatures-min"
                    id="WeatherForcast-temperatures-min-right-bottom"
                  >
                    {Math.round(forcast[2].temp.min)}°
                  </span>
                </div>
                <span id="right-bottom-icon">
                  <WeatherIcon code={forcast[2].weather[0].icon} />
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
