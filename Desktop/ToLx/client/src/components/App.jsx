import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Las from "./Las";
import Home from "./Home";
import Signup from "./Signup";
import Details from "./Details";
import Cart from "./Cart";  // Import the Cart component
import Checkout from "./Checkout";
import { CartProvider } from "./CartContext";  // Import the CartProvider

function App() {
  return (
    <CartProvider>
      <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Las />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
