import React from "react";
import Card from 'react-bootstrap/Card';

const Project = ({name, tags, image}) => {
  return (
    <Card style={{width: "14rem", heigth: "160px", margin: "10px"}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {tags}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Project;
