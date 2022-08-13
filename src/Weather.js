import React from "react";
import { Accordion } from "react-bootstrap";
import WeatherDay from "./WeatherDay"; 

class Weather extends React.Component {


  render() {
    return (
      <>
          {this.props.weather.length > 0 &&
            this.props.weather.map((day)=>(
              <WeatherDay
              idx = {day.idx}
              day = {day.date}
              description={day.desciption}
              />
              ))}
              </>
    )
  }
}




export default Weather;

