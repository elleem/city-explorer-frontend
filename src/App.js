import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props); 
    this.state= {
      citySearch: "", 
      locationObj:{}
    }
  }

  getLocation = async(event)=>{
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.citySearch}&format=json`;
    console.log("URL: ", url); 
    const response = await axios.get(url); 
    //try catch if not catches the error
    console.log("response Object: ", response); 
    this.setState({locationObj:response.data[0]})
  }

render () {
  console.log(this.state); 
  return (
    <div className="App">
      <input
      onChange={(e)=>this.setState({citySearch: e.target.value})}
      placeholder = 'search for a city'></input>
      <button as="input" type="submit" value="Submit" variant="primary" onClick={this.getLocation}>Explore!</button>
      {this.state.locationObj.place_id &&
      <>
      <h2>{this.state.locationObj.display_name}</h2>
      <p>Lat/Lon: {this.state.locationObj.lat}, {this.state.locationObj.lon}</p>
      </>
      } 
    </div>
  );
}
}

export default App;
