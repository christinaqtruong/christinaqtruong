import React, { useContext } from "react";
import { DataContext } from "./data";
import "../styles/carousel.scss";
import Carousel from "react-bootstrap/Carousel";

const Gallery = props => {
  const [projects] = useContext(DataContext);
  let { id } = props.match.params;

  let project = projects.find(project => {
    return project.slug === id;
  });
  return (
    <Carousel>
      {project.gallery.map(image => (
        <Carousel.Item>
          <img className="d-block" src={image} alt={project.title} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Gallery;
