import React from "react";
import WeatherDay from "./WeatherDay";
import Accordion from "react-bootstrap/Accordion";

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.weather.length > 0 && (
          <Accordion defaultActiveKey="0">
            {this.props.weather.map((day, idx) => (
              <WeatherDay
                key={idx}
                date={day.date}
                description={day.description}
              />
            ))}
          </Accordion>
        )}
      </>
    );
  }
}

export default Weather;
