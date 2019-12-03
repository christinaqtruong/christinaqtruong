import React, { useContext } from "react";
import { DataContext } from "./data";
import "../styles/detail.scss";

const Detail = props => {
  const [projects] = useContext(DataContext);
  let { id } = props.match.params;

  let project = projects.find(project => {
    return project.slug === id;
  });

  console.log(project.dev);

  return (
    <div className="wrapper">
      <h1>{project.title}</h1>
      <ul className="dev">
        {project.dev.map(dev => (
          <li>{dev}</li>
        ))}
      </ul>
    </div>
  );
};

export default Detail;
