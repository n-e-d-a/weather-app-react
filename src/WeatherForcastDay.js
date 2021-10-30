import React from "react";
import "./Circular.css";

export default function WeatherForcastDay(props){
        let date= new Date(props.data.dt*1000)
        let day=date.getDay();
        let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
     return days[day];
    }