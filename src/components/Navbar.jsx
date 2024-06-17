import React from "react";
import Sidebar from "./Sidebar";
function Navbar() {
  return (
    <div className="header">
        
      <div className="logo">
        <img src="/images/logofinall.png" alt="" />
      </div>

      <div className="header-right">
       <Sidebar />
    </div>
    </div>
  );
}
export default Navbar;
