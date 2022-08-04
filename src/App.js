import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer'; 
import Locations from "./Locations"; 
// import axios from 'axios';

class App extends React.Component{
  // constructor(props){
  //   super(props); 
  //   this.state= {
  //     citySearch: "", 
  //     locationObj:{}
  //   }
  // }
  // getLocation = async(event)=>{
  //   event.preventDefault();
  //   const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.citySearch}&format=json`;
  //   console.log("URL: ", url); 
  //   const response = await axios.get(url); 
  //   //try catch if not catches the error
  //   console.log("response Object: ", response); 
  //   this.setState({locationObj:response.data[0]})
  // }


  

  render() {
    return (
      <div className="App">
        <Header />
        <Locations />
        <Footer />
      </div>
    );
  }
}

export default App;
