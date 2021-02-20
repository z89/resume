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
          <div
            style={{
              display: "flex",
              transform: "translate(0%, 10%)",
              margin: "0 auto",
              width: "80%",
            }}
            className="resume"
          >
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
