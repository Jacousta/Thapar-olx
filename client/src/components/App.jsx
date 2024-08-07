import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './Login';
import Las from './Las';
import Home from './Home';
import Signup from './Signup';
import Details from './Details';
import Cart from './Cart';
import Checkout from './Checkout';
import { CartProvider } from './CartContext';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import Sidebar from './Sidebar';
import axios from 'axios';
import Forgot from './Forgot';
import SearchResult from './SearchResult'; // Import SearchResult

// Setup axios base URL
axios.defaults.baseURL = 'https://thapar-olx.onrender.com';  // Update with your backend URL

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Las />} />
            <Route path="/forgotpassword" element={<Forgot />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search-results" element={<SearchResult />} /> {/* Add the route */}
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/cart" element={<Cart />} /> 
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
