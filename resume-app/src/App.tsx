import React from "react";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Resume from "./components/Resume";

import "./styles/style.css";

function App() {
  return (
    <>
      <Container fluid>
        <div className="App">
          <Navbar />
          <Resume />
        </div>
      </Container>
    </>
  );
}

export default App;
