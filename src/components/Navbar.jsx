import React from "react";
import Sidebar from "./Sidebar";
function Navbar() {
  return (
    <div class="header">
      <a href="#default" className="logo">
        CompanyLogo
      </a>
      <div class="header-right">
       <Sidebar />
    </div>
    </div>
  );
}
export default Navbar;
