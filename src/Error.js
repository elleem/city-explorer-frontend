import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

class Error extends Component{

  render(){
    console.log("Error"); 
    return(
      <Alert variant="danger">
        <p>
        Error: {this.props.message}
        </p>
      </Alert>
    )
  }
}

export default Error; 