import React, { useState, useContext } from 'react';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Cookies from 'js-cookie';

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const forgotpassword=()=>{
    navigate("/forgotpassword");
  }
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.username || !user.password) {
      alert("All fields are required");
      return;
    }
    
    try {
      const response = await fetch("https://thapar-olx-1.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          password: user.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        setUser({
          username: "",
          password: ""
        });

        // Store token in cookies with 1-day expiry
        if (data.token) {
          Cookies.set('token', data.token, { expires: 1 });
          login(data.token);
        }

        navigate("/home");
      } else {
        // Check for specific error messages
        if (data.message === "Incorrect password" || data.message === "User not registered") {
          alert(data.message);
          setTimeout(() => {
            navigate("/signup");
          }, 2000); // Navigate to signup page after 2 seconds
        } else {
          alert(data.message || "Login failed");
        }
      }

    } catch (error) {
      console.error("login error:", error);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label htmlFor="uname"><b>Username</b></label>
        <Input
          type="text"
          placeholder="Enter Username"
          name="username"
          value={user.username}
          onChange={handleInput}
        />
        <label htmlFor="psw"><b>Password</b></label>
        <Input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={user.password}
          onChange={handleInput}
        />
        <button type="submit" className="login-button"><span>Login</span></button>
        <label>
          <Input type="checkbox" name="remember" />Remember me
        </label>
      </div>
      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button type="button" className="cancelbtn" onClick={handleCancel}><span>Cancel</span></button>
        <span className="psw"><a href="#" onClick={forgotpassword}>Forgot password?</a></span>
      </div>
    </form>
  );
}

export default Login;
 