import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const aboutStyle = {
  paddingTop: 128
}

function About() {
  return (
    <Jumbotron fluid style={aboutStyle}>
      <h1>christina q. truong</h1>
      <p>Full stack web developer specialized in React and Javascript.</p>
    </Jumbotron>
  );
}

export default About;
