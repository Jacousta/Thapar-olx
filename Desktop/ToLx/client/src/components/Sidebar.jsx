import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [isClosed, setClose] = useState(false);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    setClose(!isClosed);
    if (isClosed) {
      closeNav();
    }
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <div>
      <div id="mySidebar" className="sidebar">
        <a href="#" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
        <a href="#" onClick={handleLogout}>Logout</a>
      </div>

      <div id="main">
        <button className="openbtn" onClick={openNav}>
          &#9776;
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
