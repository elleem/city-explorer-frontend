import axios from "axios";
import React from "react";
import { Accordion, Card } from "react-bootstrap";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
    };
  }
  getWeather = async () => {
    const url = `${process.env.REACT_APP_WEATHER_KEY}/weather?searchQuery=${this.props.citySearch}`;
    const response = await axios.get(url);
    console.log(response);
    this.setState({ weather: response.data });
  };
  render() {
    return (
      <>
        <button onClick={this.getWeather}> Get Weather</button>
        <Accordion defaultActiveKey="0">
          {this.state.weather.length > 0 &&
            this.state.weather.map((forecast, idx) => (
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

