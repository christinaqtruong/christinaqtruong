import React from "react";
import About from "./about";
import ProjectList from "./projectList";
import Navigation from "./nav";
// import Background from "../images/mountain_landscape.svg"

//style={{backgroundImage: `url(${Background})`}}

function Homepage() {
  return (
    <div>
      <Navigation/>
      <About />
      <ProjectList />
    </div>
  );
}

export default Homepage;
