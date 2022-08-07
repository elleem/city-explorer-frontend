import React from "react";
import Alert from 'react-bootstrap/Alert';

class Error extends React.Component{

  render(){
    return(
      <Alert variant="danger">
        <p>
        Error: {this.props.error.message}
        </p>
      </Alert>
    )
  }
}

export default Error; 