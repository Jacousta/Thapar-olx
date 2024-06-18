import React from "react";
import Sidebar from "./Sidebar";
import Search from "./Search";

function Navbar() {
  return (
    <div className="header">
      <div className="logo">
        <img src="/images/logofinall.png" alt="Logo" />
      </div>
      <div className="searchSide">
      <div>
        <Search />
      </div>
        <div>
        <Sidebar/>
        </div>
      </div>  
      </div>
  );
}

export default Navbar;
