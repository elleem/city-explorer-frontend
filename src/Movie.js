import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

class Movie extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }} id="card" className="h-100 p-3">
                  <Card.Body>
                    <Card.Title> Title: {this.props.title} </Card.Title>
                    <Card.Text>Description: {this.props.overview}</Card.Text>
                    <Card.Img
                      src={this.props.image_url}
                      alt={this.props.title}
                      rounded="true"
                    />
                    <Card.Text>
                      Votes: {this.props.vote_average} Vote Count: {this.props.vote_count}{" "}
                      Popularity: {this.props.popularity}{" "}
                    </Card.Text>
                    <Card.Text>Release Date: {this.props.release_date}</Card.Text>
                  </Card.Body>
                </Card>
      </>
    );
  }
}

export default Movie;