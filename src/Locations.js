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

  getLocation = async (search) => {
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.citySearch}&format=json`;
      const response = await axios.get(url);
      //try catch conditional catches the error
      let data = response.data[0]
      this.setState({ locationObj: response.data[0], lat: data.lat, lon: data.lon, error: null });
      //this.getWeather(lat, lon);
      this.getWeather(data.lat, data.lon); 
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

  getWeather = async (lat,lon) => {
    const url = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`;
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
              citySearch={this.state.locationObj.display_name}
              lat={this.state.locationObj.lat}
              lon={this.state.locationObj.lon}
            />
          </>
        )}
        {this.state.error && <Error error={this.state.error} />}

        {/* //locations will render weather component */}

        <>
          {this.state.locationObj.place_id && <Weather weather={this.state.weather} />}
        </>
      </Form.Group>
    );
  }
}

export default Locations;
