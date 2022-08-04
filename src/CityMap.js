import React from 'react';
import Card from 'react-bootstrap/Card';


class CityMap extends React.Component {


  render() {
    return(
        <Card id="map">
          <Card.Body>
          <Card.Title>City: {this.props.citySearch}</Card.Title>
          <Card.Text>Latitude: {this.props.lat}</Card.Text>
          <Card.Text>Longitude: {this.props.lon}</Card.Text>
          <Card.Img id="map-image"style={{width: '100%'}}
          src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.props.lat},${this.props.lon}&zoom=12&size=480x480`}/>
          </Card.Body>
        </Card>
    )    
  }
}

export default CityMap;