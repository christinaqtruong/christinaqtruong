import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const linkStyle = {
    display: "flex",
    justifyContent: "center"
}

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand>christina.q.truong</Navbar.Brand>
    <Nav className="mr-auto" style={{linkStyle}}>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
    </Nav>
  </Navbar>
  );
}

export default Navigation;
