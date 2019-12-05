import React from "react";
import About from "./about";
import ProjectList from "./projectList";
import Bio from "./bio";
import "../styles/about.scss";

function Homepage() {
  return (
    <div>
      <About />
      <Bio/>
      <ProjectList />
    </div>
  );
}

export default Homepage;
