import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./assests/components/Navigation";
import Portfolio from "./assests/components/Portfolio";
// import "../node_modules/react-bootstrap/dist/css/react-bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "./assests/styles/style.css";

function App() {
  return (
    <>
      <Container fluid>
        <div className="App">
          <Navigation />

          <Portfolio />
        </div>
      </Container>
    </>
  );
}

export default App;
