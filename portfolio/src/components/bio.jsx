import React from "react";
import Navigation from "./nav";
import Image from "react-bootstrap/Image";
import Profile from "../images/Profile.jpg";
import "../styles/bio.scss";
import { Link } from "react-scroll";
import ProgressBar from "react-bootstrap/ProgressBar";

const Bio = () => {
  return (
    <div>
      <Navigation />
      <div id="bio">
        <Image className="profile-pic" src={Profile} rounded />
        <div className="progress-bar">
          <div className="trait">HTML</div>
          <ProgressBar classname="bar" now={90} />
          <div className="trait">CSS/CSS Grid/ Flexbox/ Bootstrap</div>
          <ProgressBar classname="bar" now={80} />
          <div className="trait">Javascript</div>
          <ProgressBar classname="bar" now={70} />
          <div className="trait">Node.js</div>
          <ProgressBar classname="bar" now={60} />
          <div className="trait">React.js</div>
          <ProgressBar classname="bar" now={70} />
        </div>
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="link"
        >
          View my Work
        </Link>
      </div>
    </div>
  );
};

export default Bio;
