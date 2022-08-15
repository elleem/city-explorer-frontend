import React from "react";
import Accordion from "react-bootstrap/Accordion";

class WeatherDay extends React.Component {
  render() {
    return (
      <>
          <Accordion.Item eventKey={this.key} >
            <Accordion.Header> {this.props.date}</Accordion.Header>
            <Accordion.Body>{this.props.description}</Accordion.Body>
          </Accordion.Item>
      </>
    );
  }
}

export default WeatherDay;
