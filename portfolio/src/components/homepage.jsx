import React from "react";
import About from "./about";
import ProjectList from "./projectList";
import Navigation from "./nav";
import "../styles/about.scss";

function Homepage() {
  return (
    <div>
      <About />
      <Navigation/>
      <ProjectList />
    </div>
  );
}

export default Homepage;
