import React from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Error from "./Error";
import CityMap from "./CityMap";
import Weather from "./Weather";
import Movies from "./Movies";
import Search from "./Search";

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
      movies: [],
    };
  }

  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.citySearch}&format=json`;
    axios
      .get(url)
      .then((response) => {
        //try catch conditional catches the error
        let data = response.data[0];
        this.setState({
          locationObj: response.data[0],
          lat: data.lat,
          lon: data.lon,
          error: null,
        });
        this.getWeather(data.lat, data.lon);
        this.getMovies();
      })
      .catch((error) => {
        if (error.response) {
          let message = `${error.response.data.error}. ${error.message}${error.code}`;
          this.setState({
            error: { status: error.response, message: message },
            locationObj: {},
          });
        }
      });
  };

  handleOnChange = (userSearch) => {
    this.setState({ citySearch: userSearch });
    console.log(this.state.citySearch);
  };

  getWeather = async (lat, lon) => {
    const url = `${process.env.REACT_APP_HEROKU}/weather?lat=${lat}&lon=${lon}`;
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        this.setState({ weather: response.data });
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };

  getMovies = async () => {
    const url = `${process.env.REACT_APP_HEROKU}/movies?cityMovie=${this.state.citySearch}`;
    axios.get(url).then((response)=>{
      console.log("movie response data:", response.data);
      this.setState({ movies: response.data });
    }).catch((error)=>{
      this.setState({error:error});
    });
  };

  render() {
    return (
      <>
        <Container>
          <Search
            getLocation={this.getLocation}
            handleOnChange={this.handleOnChange}
          />
          {this.state.locationObj.place_id && (
            <CityMap
              citySearch={this.state.locationObj.display_name}
              lat={this.state.locationObj.lat}
              lon={this.state.locationObj.lon}
            />
          )}
          <Weather weather={this.state.weather} />
          <Movies movies={this.state.movies} />
          {this.state.error && <Error error={this.state.error} />}
        </Container>
      </>
    );
  }
}

export default Locations;
