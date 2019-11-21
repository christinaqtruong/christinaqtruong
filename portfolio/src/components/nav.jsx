import React from "react";
import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import { Link, animateScroll as scroll } from "react-scroll";

// const linkStyle = {
//     display: "flex",
//     justifyContent: "center"
// }

const navStyle = {
  paddingLeft: 10,
  paddingRight: 10, 
  display: "block",
};

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand>christina.q.truong</Navbar.Brand>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        style={navStyle}
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        style={navStyle}
      >
        Work
      </Link>
      {/* <Nav className="mr-auto" style={{linkStyle}}>
      <Nav.Link href="/about" >About</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
    </Nav> */}
    </Navbar>
  );
};

export default Navigation;
