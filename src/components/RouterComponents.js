import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function RouterComponents() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route eaxct path="/about" elementt={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default RouterComponents;
