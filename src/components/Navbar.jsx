import React from "react";
import Sidebar from "./Sidebar";
function Navbar() {
  return (
    <div class="header">
        
      <div className="logo">
        <img src="/Users/akhilsharma/Desktop/ToLx/public/logofinal.png" alt="" />
      </div>

      <div class="header-right">
       <Sidebar />
    </div>
    </div>
  );
}
export default Navbar;
