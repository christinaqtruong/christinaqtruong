import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const linkStyle = {
    display: "flex",
    justifyContent: "center",
}

const navStyle = {
  height: "8vh",
  minHeight: "8vh"
}


const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" style={navStyle}>
      <Navbar.Brand>christina.q.truong</Navbar.Brand>
      <Nav className="mr-auto" style={{linkStyle}}>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/resume/christina_truong">Resume</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
