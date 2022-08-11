import axios from "axios";
import React from "react";
import { Accordion } from "react-bootstrap";

class Weather extends React.Component {


  render() {
    return (
      <>
        <Accordion defaultActiveKey="0">
          {this.props.weather.length > 0 &&
            this.props.weather.map((forecast,idx)=>(
              <Accordion.Item eventKey={idx} key={idx}>
                <Accordion.Header>{forecast.date}</Accordion.Header>
                <Accordion.Body>
                  {forecast.description}
                  </Accordion.Body>
            </Accordion.Item>
            ))}
        </Accordion>
      </>
    );
  }
}

export default Weather;

