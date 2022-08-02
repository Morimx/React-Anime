import React from "react";
import "./App.css";
import Navbar1 from "./Components/Navbar/navbar";
import Openings from "./pages/Openings/openings";
import Endings from "./pages/Endings/endings";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import { useState } from "react";
import "./App.css";

function App() {

  return (
    <>
      <Navbar1 />
      <main>
        <Container>
          <Row>
            <Col>
              {" "}
              <Openings />
            </Col>
            <Col>
              {" "}
              <Endings />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App;
