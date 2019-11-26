import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import ResumeImage from "../resume/truong_christina_resume.svg";
import Navigation from "./nav";

class Resume extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Image
          style={{
            marginTop: "5vh",
            marginBottom: "5vh",
            border: "solid",
            borderWidth: "1px",
            borderColor: "black"
          }}
          src={ResumeImage}
          fluid
        />
      </div>
    );
  }
}

export default Resume;
