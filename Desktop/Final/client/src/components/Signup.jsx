import React, { useState } from 'react';
import Input from './Input';
function Signup() {

  return (
    <form>
      <div className= "container">
        <label htmlFor="uname"><b>Create Username</b></label>
        <Input type="text" placeholder="Enter Username" />
        <label htmlFor="psw"><b>Create Password</b></label>
        <Input type="password" placeholder="Enter Password"/>
        <label htmlFor="psw"><b>Confirm Password</b></label>
        <Input type="password" placeholder="Enter Password"/>
        <button type="submit" className='login-button'><span>Signup</span></button>
        <label>
         <Input type="checkbox" checked="checked" name="remember" />Remember me
        </label>
      </div>
    </form>
  );
}

export default Signup;
