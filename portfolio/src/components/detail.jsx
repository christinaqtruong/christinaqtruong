import React, { useContext } from "react";
import { DataContext } from "./data";
import "../styles/detail.scss";
import Navigation from "./nav";
import Carousel from "react-bootstrap/Carousel";

// import Image from 'react-bootstrap/Image';
// import pic from "../gifs/Gif Images/heroes/HU1.png";
// import Player from "./player";

const Detail = props => {
  const [projects] = useContext(DataContext);
  let { id } = props.match.params;

  let project = projects.find(project => {
    return project.slug === id;
  });

  return (
    <div id="wrapper">
      <Navigation />
      <div id="details">
        <div className="title">{project.title}</div>
        {/* <Player /> */}
        {/* {project.gallery.map(image => (<Image src={image} fluid />))} */}
          <Carousel className="carousel">
            {project.gallery.map(image => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={project.title}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        <p className="description">{project.description}</p>

        <ul className="dev">
          {project.dev.map(dev => (
            <span className="dev-span">
              <li>{dev}</li>
            </span>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Detail;
