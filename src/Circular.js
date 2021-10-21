import React ,{useState} from "react";
import { Planet } from "react-planet";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import "./Circular.css";
import Weatherinfo from "./Weatherinfo";


export default function Circular(props) {
   const[city,setCity]=useState(props.defaultCity);
   const[weatherData,setWeatherData]=useState({ready:false});
   
  function handleResponse(response) {
      setWeatherData({
        ready: true,
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        city: response.data.name,
        description: response.data.weather[0].description,
        iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        date: new Date(response.data.dt * 1000),
      });
   
  }
  function Search(){
 const apiKey = "04b56cea58af88ba207e488d6cd103c8";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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

    if (weatherData.ready) {
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
                <Weatherinfo data={weatherData} />
                <div className="container">
                  <div className="toggle">
                    <div className="input-group mb-3 ">
                      <form className="ms-4" onSubmit={handleSubmit}>
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
            >
              {weatherData.city}
            </div>
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
    } else {
     Search();
      return"loding...";
    }
  

  
  
}
