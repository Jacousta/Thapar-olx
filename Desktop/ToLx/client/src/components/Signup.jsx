import React, { useState } from 'react';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const navigate =useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirm_password: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      });
      if(response.ok)
        {
         setUser({username: "",
          password: "",
          confirm_password: ""}) 
          navigate("/home")
        }
      const data = await response.json(); // Make sure to parse the JSON response
      console.log(response);
    } catch (error) {
      console.error("Register error:", error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label htmlFor="uname"><b>Create Username</b></label>
        <Input type="text" placeholder="Enter Username" name="username" value={user.username} onChange={handleInput} />
        
        <label htmlFor="psw"><b>Create Password</b></label>
        <Input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handleInput} />
        
        <label htmlFor="psw"><b>Confirm Password</b></label>
        <Input type="password" placeholder="Enter Password" name="confirm_password" value={user.confirm_password} onChange={handleInput} />
        
        <button type="submit" className='login-button'><span>Signup</span></button>
        
        <label>
          <Input type="checkbox" name="remember" /> Remember me
        </label>
      </div>
    </form>
  );
}

export default Signup;
