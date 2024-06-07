import React from "react";
import Sidebar from "./Sidebar";
function Navbar() {
  return (
    <div class="header">
        
      <div className="logo">
        <img src="/images/logofinall.png" alt="" />
      </div>

      <div class="header-right">
       <Sidebar />
    </div>
    </div>
  );
}
export default Navbar;
