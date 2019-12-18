import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/project.scss";
import { Link } from "react-router-dom";

const Project = ({ name, tags, image, slug }) => {
  return (
    <Link to={"/projects/" + slug}>
      <Card className="icon">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{tags}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Project;
