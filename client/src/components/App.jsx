import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './Login';
import Las from './Las';
import Home from './Home';
import Signup from './Signup';
import Details from './Details';
import Cart from './Cart';  // Import the Cart component
import Checkout from './Checkout';
import { CartProvider } from './CartContext';  // Import the CartProvider
import { AuthProvider } from './AuthContext';  // Import the AuthProvider
import PrivateRoute from './PrivateRoute';  // Import the PrivateRoute
import Sidebar from './Sidebar';  // Import the Sidebar

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Las />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
