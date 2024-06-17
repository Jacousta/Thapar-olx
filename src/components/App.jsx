import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Las from "./Las";
import Home from "./Home"; 
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Las />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
