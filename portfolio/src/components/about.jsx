import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link, animateScroll as scroll } from "react-scroll";


const aboutStyle = {
  paddingTop: 128,
  marginBottom: 0
}

const scrollBar = {
  display: "flex",
  justifyContent: "center",
  paddingBottom: 15
};

const wrapperStyle = {
  height: "92vh",
  minHeight: "92vh"
}

function About() {
  return (
    <div style={wrapperStyle}>
    <Jumbotron fluid style={aboutStyle} id="about">
      <h1>christina q. truong</h1>
      <p>Full stack web developer specialized in React and Javascript.</p>
    </Jumbotron>
    <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        style={scrollBar}
      >Back to Projects
      </Link>
    </div>
  );
}

export default About;
