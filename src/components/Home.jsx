import React from "react";
import Items from "./Items";
import Navbar from "./Navbar";
import item from "../item";

function createinput(item){
  return (
    <Items
      key={item.id}
      image={item.image}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  );
}
function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="items-container">
      {item.map(createinput)}
      </div>
    </div>
  );
}
export default Home;
