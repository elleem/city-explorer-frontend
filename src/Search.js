import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Search extends React.Component {
  render() {
    return (
      <Form >
        <Form.Group id="form">
          <Form.Label>Enter a City</Form.Label>
          <Form.Control
            onChange={(e) => this.props.handleOnChange(e.target.value)}/>
          <Button id="button" onClick={()=>this.props.getLocation()}>
            Explore!
          </Button>
        </Form.Group>
      </Form>
    );
  }
}
export default Search;
