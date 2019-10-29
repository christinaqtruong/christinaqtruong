import React from "react";
import Card from 'react-bootstrap/Card';

const Project = props => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.tags}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Project;
