import React from "react";
import "./Circular.css";

export default function FormatedMonth(props){
    let months=["January" , "Februry" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
    let month=months[props.date.getMonth()];
    let dateDay=props.date.getDate()
    let hour=props.date.getHours();
    let minute=props.date.getMinutes();
    if(minute<10){
        minute=`0${minute}`;
    }
    if (hour < 10) {
      hour = `0${hour}`;
    }
return (
  <div>
    <ul className="mt-2">
      <li>
       {month} {dateDay}
      </li>
      <li>
        {hour}:{minute}
      </li>
    </ul>
  </div>
);
} 