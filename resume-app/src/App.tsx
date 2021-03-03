import React from "react";
import Navigation from "./assests/components/Navigation";
import Portfolio from "./assests/components/Portfolio";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assests/styles/style.css";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <Portfolio />
      </div>
    </>
  );
}

export default App;
