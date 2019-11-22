import React, { Component } from 'react';
import Pdf from '../resume/truong_q_christina_resume.pdf';

class Resume extends Component {

  render() {

    return (
      <div className = "Resume">
        <a href={Pdf}>Resume</a>
      </div>
    );
  }
}

export default Resume;