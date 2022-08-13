import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

class Movies extends React.Component {
  render() {
    return (
      <Container fluid id="main">
        <Row sm={1} md={2} lg={3} xl={4} xxl={5}>
          {this.props.movies.length > 0 &&
            this.props.movies.map((movie) => (
              <Col>
                <Card style={{ width: "18rem" }} id="card" className="h-100 p-3">
                  <Card.Body>
                    <Card.Title> Title: {movie.title} </Card.Title>
                    <Card.Text>Description: {movie.overview}</Card.Text>
                    <Card.Img
                      src={movie.image_url}
                      alt={movie.title}
                      rounded="true"
                    />
                    <Card.Text>
                      Votes: {movie.vote_average} Vote Count: {movie.vote_count}{" "}
                      Popularity: {movie.popularity}{" "}
                    </Card.Text>
                    <Card.Text>Release Date: {movie.release_date}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default Movies;
