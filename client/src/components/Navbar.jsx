import React from "react";
import Sidebar from "./Sidebar";
import Search from "./Search";
import Cart from "./Cart";

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
        <div className="phone">
        <Sidebar/>
        </div>
        <div>
          <Cart/>
        </div>
      </div>  
      </div>
  );
}

export default Navbar;
