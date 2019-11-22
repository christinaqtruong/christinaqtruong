import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import ResumeImage from "../resume/truong_christina_resume.svg"

class Resume extends Component {

  render() {

    return (
      <Image style={{marginTop: "13vh", marginBottom: "5vh", border: "solid", borderWidth: "1px", borderColor: "black"}} src={ResumeImage} fluid />
    );
  }
}

export default Resume;