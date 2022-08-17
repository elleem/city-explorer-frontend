import React from "react";
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.weather.length > 0 && 
            this.props.weather.map((day, idx) => (
              <WeatherDay
                key={idx}
                date={day.date}
                description={day.description}
              />
              ))}
              </>
            );
  }
  } 

export default Weather;
