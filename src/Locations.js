import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Error from './Error'; 
import CityMap from './CityMap'


class Locations extends React.Component{
  constructor(props){
    super(props); 
    this.state= {
      citySearch: "", 
      locationObj:{},
      lat:0.00,
      lon:0.00,
      error: {status: null, message: null},
      errorResponse: true,
      errorState: ""
    }
  }

  getLocation = async(event)=>{
    try{
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.citySearch}&format=json`;
    console.log("URL: ", url); 
    const response = await axios.get(url); 
    //try catch conditional catches the error
    console.log("response Object: ", response); 
    this.setState({locationObj:response.data[0]})
    }catch(error) {
        let message = `${error.repsonse.data.error}. ${error.message}${error.code}.`;
        this.setState({error:{status: error.response, message: message}}); 
        this.setState({errorState: "fail"}); 
      }; 
    }
  

render () {
  console.log(this.state); 
  return (
    <Form.Group id="form">
      <Form.Control
      onChange={(e)=>this.setState({citySearch: e.target.value})}
      placeholder = 'search for a city'/>
      <button variant="primary" type="submit" onClick={this.getLocation}>Explore!</button>
      {this.state.locationObj.place_id &&
      <>
      <CityMap
      getLocation = {this.state.getLocation}
      citySearch ={this.state.locationObj.display_name}
      lat = {this.state.locationObj.lat}
      lon = {this.state.locationObj.lon}/>
      {this.state.errorState && 
      <Error message={this.state.message}
      status={this.state.error.response} />}
      </>
      } 
    </Form.Group>
  );
}
}

export default Locations;
