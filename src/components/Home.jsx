import React, { useState } from "react";
import Items from "./Items";
import Navbar from "./Navbar";
import item from "../item";

function createinput(item) {
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
  const [initial, setInitial] = useState({
    image: "",
    name: "",
    description: "",
    price: "",
  });
  const [items, setItems] = useState(item);
  function userInput(event) {
      const { name, value } = event.target;
    setInitial(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  function addProduct() {
    const newProduct = {
      ...initial,
      id: items.length + 1 // Assuming `id` is a numeric value
    };
    setItems(prevItems => [...prevItems, newProduct]);
    setInitial({
      image: "",
      name: "",
      description: "",
      price: ""
    });
  }
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="items-container">{item.map(createinput)}</div>
      <div className="addProduct-container">
     
        <button className="addProduct" onClick={addProduct}>Add product</button>
      </div>
    </div>
  );
}
export default Home;
