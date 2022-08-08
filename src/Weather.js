import axios from 'axios';
import React from 'react';
import { Accordion,Card } from 'react-bootstrap';

class Weather extends React.Component{
  constructor(props){
    super(props); 
    this.state ={
      weather:[]
    }
  }
  getWeather = async ()=>{
    const url = `${process.env.REACT_APP_WEATHER_KEY}/weather?searchQuery=${this.props.citySearch}`; 
    const response = await axios.get(url); 
    console.log(response); 
    this.setState({weather: response.data}); 
  }
  render (){
    return (
      <>
      <button onClick = {this.getWeather}> Get Weather</button>
      <Accordion>
        {this.state.weather.length > 0 && this.state.weather.map((forecast, idx) =>(
          <Card key = {idx}>
            <p>{forecast.description}: {forecast.date}</p>
          </Card>
        ))}
      </Accordion>
      </>
    )
  }
}

export default Weather; 


