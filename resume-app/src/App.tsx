import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Resume from "./components/Resume";
// import "../node_modules/react-bootstrap/dist/css/react-bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/style.css";

function App() {
  return (
    <>
      <Container fluid>
        <div className="App">
          <Navigation />
          <div
            style={{
              display: "flex",
              transform: "translate(0%, 10%)",
              margin: "0 auto",
              width: "90%",
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
