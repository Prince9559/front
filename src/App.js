import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Front from "./component/Front";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>

        <Route path="/" element={<Front />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;

