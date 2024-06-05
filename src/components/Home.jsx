import React from "react";
import Items from "./Items";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Items
          image="/download.png"
          name="Acer"
          description="Laptop"
          price="120000"
        />
        <div>
        <Items
          image="/download.png"
          name="Acer"
          description="Laptop"
          price="120000"
        />
        </div>
      </div>
    </div>
  );
}
export default Home;
