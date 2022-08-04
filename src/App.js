import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer'; 
import Locations from "./Locations"; 
// import axios from 'axios';

class App extends React.Component{



  

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
