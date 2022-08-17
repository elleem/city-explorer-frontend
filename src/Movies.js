import React from "react";
import Movie from "./Movie";
import {Container, Row, Col } from "react-bootstrap";

class Movies extends React.Component {
  render() {
    return (
      <Container fluid id="main">
        <Row sm={1} md={2} lg={3} xl={4} xxl={5}>
          {this.props.movies.length > 0 &&
            this.props.movies.map((movie,key) => (
              <Col>
                <Movie
                  key={key}
                  title={movie.title}
                  description={movie.overview}
                  src={movie.image_url}
                  alt={movie.title}
                  votes={movie.vote_average}
                  vote_count={movie.vote_count}
                  popularity={movie.popularity}
                  release_date={movie.release_date}
                />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default Movies;
