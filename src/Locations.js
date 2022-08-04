import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
      error: null, 
      errorMessage: null
    }
  }

  getLocation = async()=>{
    try{
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.citySearch}&format=json`;
    console.log("URL: ", url); 
    const response = await axios.get(url); 
    //try catch conditional catches the error
    console.log("response Object: ", response); 
    this.setState({locationObj:response.data[0]})
    }catch(error) {
        if(error.response){
         let message = `${error.repsonse.data.error}. ${error.message}${error.code}.`;
        this.setState({error:{status: error.response, message: message}}); 
        }
      }; 
    }
  

render () {
  console.log(this.state); 
  return (
    <Form.Group id="form">
      <Form.Control
      onChange={(e)=>this.setState({citySearch: e.target.value})}
      placeholder = 'search for a city'/>
      <Button onClick={this.getLocation}>Explore!</Button>
      {this.state.locationObj.place_id &&
      <>
      <CityMap
      getLocation = {this.state.getLocation}
      citySearch ={this.state.locationObj.display_name}
      lat = {this.state.locationObj.lat}
      lon = {this.state.locationObj.lon}/>
      {this.state.error && 
      <Error {...this.state} />}
      </>
      } 
    </Form.Group>
  );
}
}

export default Locations;
