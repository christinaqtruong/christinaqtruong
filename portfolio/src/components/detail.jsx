import React, { useContext } from "react";
import { DataContext } from "./data";

const Detail = (props) => {
  const [projects] = useContext(DataContext);
  let { id } = props.match.params;

  let project = projects.find(project => {
    return project.slug === id;
  })

  return (
    <div
      className="wrapper"
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <h1>{project.title}</h1>
    </div>
  );
};

export default Detail;
