import React from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Error from "./Error";
import CityMap from "./CityMap";
import Weather from "./Weather";

class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citySearch: "",
      locationObj: {},
      lat: 0.0,
      lon: 0.0,
      error: null,
      weather: [],
    };
  }

  getLocation = async () => {
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.citySearch}&format=json`;
      const response = await axios.get(url);
      //try catch conditional catches the error
      this.setState({ locationObj: response.data[0], error: null });
    } catch (error) {
      if (error.response) {
        let message = `${error.response.data.error}. ${error.message}${error.code}`;
        this.setState({
          error: { status: error.response, message: message },
          locationObj: {},
        });
      }
    }
  };

  getWeather = async () => {
    const url = `${process.env.REACT_APP_WEATHER_KEY}/weather?searchQuery=${this.props.citySearch}`;
    const response = await axios.get(url);
    console.log(response);
    this.setState({ weather: response.data });
  };

  render() {
    return (
      <Form.Group id="form">
        <Form.Control
          onChange={(e) => this.setState({ citySearch: e.target.value })}
          placeholder="search for a city"
        />
        <Button id="button" onClick={this.getLocation}>
          Explore!
        </Button>
        {this.state.locationObj.place_id && (
          <>
            <CityMap
              getLocation={this.state.getLocation}
              citySearch={this.state.locationObj.display_name}
              lat={this.state.locationObj.lat}
              lon={this.state.locationObj.lon}
            />
          </>
        )}
        {this.state.error && <Error error={this.state.error} />}

        {/* //locations will render weather component */}

        <ul>
          <Weather citySearch={this.state.citySearch} />
        <Button onClick={this.getWeather}> Get Weather</Button>
          {this.state.weather.length > 0 &&
            this.state.weather.map((forecast, idx) => (
              <li key={idx}>
                <p>
                  {forecast.description}: {forecast.date}
                </p>
              </li>
            ))}
        </ul>
      </Form.Group>
    );
  }
}

export default Locations;
