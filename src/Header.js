import React from 'react'; 
import Container from "react-bootstrap/Container"

class Header extends React.Component{
  render (){
    return (
      <Container>
      <h1> City Explorer </h1>
      <h4> Search for your next city to explore!</h4>
      
      </Container>
    )
  }
}

export default Header; 