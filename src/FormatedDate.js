import React from "react";
import "./Circular.css";


export default function FormatedDate(props){
    let days=["Sunday", "Monday", "Tuesday" , "Wednsday" , "Thursday" , "Friday" , "Saturday"]
    let day=days[props.date.getDay()];

return <div>{day}</div>;
}