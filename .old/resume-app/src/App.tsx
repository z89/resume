import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
// import "../node_modules/react-bootstrap/dist/css/react-bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/style.css";

function App() {
  return (
    <>
      <Container fluid>
        <div className="App">
          <Navigation />

          <Portfolio className={"portfolio"} />
        </div>
      </Container>
    </>
  );
}

export default App;
