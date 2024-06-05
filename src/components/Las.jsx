import React from "react";
import { Link, useNavigate } from 'react-router-dom' ;
function Las()
{
        const navigate = useNavigate();
        const handleRouteClick = () => {
          navigate("/login");
        };
   return(
    <div class="initial-container">
        <h1 class="initial-heading">
            Welcome To ToLx oLx for Thapar
        </h1>
    <button class="initial-login" onClick={handleRouteClick} ><span > Login </span></button>
    <button class="initial-login" ><span> Signup </span></button>
    </div>
    );
}   
export default Las;