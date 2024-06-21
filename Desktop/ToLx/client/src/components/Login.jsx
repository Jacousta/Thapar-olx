import React, { useState } from 'react';
import Input from './Input';
function Login() {
function Change(event)
{
    window. location. reload(); 
}
  return (
    <form>
      <div className= "container">
        <label htmlFor="uname"><b>Username</b></label>
        <Input type="text" placeholder="Enter Username" />
        <label htmlFor="psw"><b>Password</b></label>
        <Input type="password" placeholder="Enter Password"/>
        <button type="submit" className='login-button'> <span> Login</span></button>
        <label>
         <Input type="checkbox" checked="checked" name="remember" />Remember me
        </label>
      </div>
      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button type="button" className="cancelbtn" onClick={Change}> <span>Cancel</span></button>
        <span className="psw"> <a href="#">Forgot password?</a></span>
      </div>
    </form>
  );
}

export default Login;
