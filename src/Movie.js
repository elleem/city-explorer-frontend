import React from "react";
import { Card } from "react-bootstrap";

class Movie extends React.Component {
  render() {
    return (
      <>
        <Card
          style={{ width: "18rem" }}
          id="card"
          className="h-100 p-3"
          key={this.key}
        >
          <Card.Body>
            <Card.Title> Title: {this.props.title} </Card.Title>
            <Card.Text>Description: {this.props.description}</Card.Text>
            <Card.Img
              src={this.props.src}
              alt={this.props.title}
              rounded="true"
            />
            <Card.Text>Votes: {this.props.votes}</Card.Text>
            <Card.Text>Vote Count: {this.props.vote_count}</Card.Text>
            <Card.Text>Popularity: {this.props.popularity}</Card.Text>
            <Card.Text>Release Date: {this.props.release_date}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Movie;
