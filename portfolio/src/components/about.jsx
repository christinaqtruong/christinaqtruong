import React from "react";
import { Link } from "react-scroll";
import Svg from "./svg"
import "../styles/about.scss";

function About() {
  return (
    <div className="wrapper">
      <div id="about">
        <Svg/>
        <h1>christina q. truong</h1>
        <p className="tagline">
          Full stack web developer specialized in React and Javascript based in Austin, TX.
        </p>
        <Link
          activeClass="active"
          to="bio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          View my Bio
        </Link>
      </div>
    </div>
  );
}

export default About;
