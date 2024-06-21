import React from "react";
import { Link, useNavigate } from 'react-router-dom' ;
function Las()
{
        const navigateLogin = useNavigate();
        const toLogin = () => {
          navigateLogin("/login");
        };
        const navigateSignup = useNavigate();
        const toSignup = () => {
          navigateSignup("/signup");
        };
   return(
    <div className="initial-container">
        <h1 className="initial-heading">
            Welcome To ToLx oLx for Thapar 
        </h1>
    <button className="initial-login" onClick={toLogin} ><span > Login </span></button>
    <button className="initial-login" onClick={toSignup}><span> Signup </span></button>
    </div>
    );
}   
export default Las;