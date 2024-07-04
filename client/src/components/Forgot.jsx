import React, { useState } from 'react';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Forgot = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    oldPassword: "",
    newPassword: ""
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

    if (!user.username || !user.oldPassword || !user.newPassword) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await axios.post(`https://thapar-olx.onrender.com/auth/change-password`, {
        username: user.username,
        oldPassword: user.oldPassword,
        newPassword: user.newPassword
      });

      if (response.status === 200) {
        alert("Password changed successfully");
        navigate("/login");
      } else {
        alert(response.data.message || "Password change failed");
      }
    } catch (error) {
      console.error("Password change error:", error);
      alert("An error occurred while changing the password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label htmlFor="username"><b>Username</b></label>
        <Input
          type="text"
          placeholder="Enter Username"
          name="username"
          value={user.username}
          onChange={handleInput}
        />
        <label htmlFor="oldPassword"><b>Old Password</b></label>
        <Input
          type="password"
          placeholder="Enter Old Password"
          name="oldPassword"
          value={user.oldPassword}
          onChange={handleInput}
        />
        <label htmlFor="newPassword"><b>New Password</b></label>
        <Input
          type="password"
          placeholder="Enter New Password"
          name="newPassword"
          value={user.newPassword}
          onChange={handleInput}
        />
        <button type="submit" className="submit-button"><span>Change Password</span></button>
        <button type="button" className="cancel-button" onClick={() => navigate("/login")}><span>Cancel</span></button>
      </div>
    </form>
  );
};

export default Forgot;
