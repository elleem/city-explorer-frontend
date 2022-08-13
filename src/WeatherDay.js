import React from "react";
import Accordion from "react-bootstrap/Accordion";

class WeatherDay extends React.Component {
  render() {
    return (
      <>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey={this.props.idx} key={this.props.idx}>
            <Accordion.Header> {this.props.date}</Accordion.Header>
            <Accordion.Body>{this.props.description}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    );
  }
}

export default WeatherDay;
