import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    setIsAuthenticated(true);
    Cookies.set('token', token);
  };

  const logout = () => {
    setIsAuthenticated(false);
    Cookies.remove('token');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
