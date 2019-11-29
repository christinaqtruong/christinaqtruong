import React from "react";
import About from "./about";
import ProjectList from "./projectList";
import "../styles/about.scss";

function Homepage() {
  return (
    <div>
      <About />
      <ProjectList />
    </div>
  );
}

export default Homepage;
