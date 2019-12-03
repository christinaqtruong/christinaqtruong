import React, { useContext } from "react";
import { DataContext } from "./data";
import "../styles/detail.scss";
import Navigation from "./nav";

const Detail = props => {
  const [projects] = useContext(DataContext);
  let { id } = props.match.params;

  let project = projects.find(project => {
    return project.slug === id;
  });


  return (
    <div id="wrapper">
      <Navigation/>
      <div id="details">
      <h1>{project.title}</h1>
      <ul className="dev">
        {project.dev.map(dev => (
          <li>{dev}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Detail;
