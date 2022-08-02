import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Brand from "./logo";

export default function Navbar1() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Brand />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-navbar">
              Home
            </Nav.Link>
            <Nav.Link href="/openings" className="text-navbar">
              Openings
            </Nav.Link>
            <Nav.Link href="/endings" className="text-navbar">
              Endings
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
