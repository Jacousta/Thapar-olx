import React, { useState } from "react";
import Items from "./Items";
import Navbar from "./Navbar";
import item from "../item";  // Sample data, replace with API calls

function createInput(item) {
  return (
    <Items
      key={item.id}
      id={item.id}
      image={item.image}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  );
}

function Home() {
  const [items, setItems] = useState(item);
  const [newItem, setNewItem] = useState({
    id: '',
    image: '',
    name: '',
    description: '',
    price: ''
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value
    }));
  };

  const handleAddProduct = () => {
    setIsFormVisible(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add API call to save the new item to the backend
    setItems((prevItems) => [
      ...prevItems,
      { ...newItem, id: prevItems.length + 1 }
    ]);
    setNewItem({
      id: '',
      image: '',
      name: '',
      description: '',
      price: ''
    });
    setIsFormVisible(false);
  };

  const handleClose = () => {
    setIsFormVisible(false);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="items-container">{items.map(createInput)}</div>
      <div className="addProduct-container">
        <button className="addProduct" onClick={handleAddProduct}>
          Add product
        </button>
      </div>
      {isFormVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="image"
                value={newItem.image}
                onChange={handleInputChange}
                placeholder="Image URL"
              />
              <input
                type="text"
                name="name"
                value={newItem.name}
                onChange={handleInputChange}
                placeholder="Product Name"
              />
              <input
                type="text"
                name="description"
                value={newItem.description}
                onChange={handleInputChange}
                placeholder="Description"
              />
              <input
                type="number"
                name="price"
                value={newItem.price}
                onChange={handleInputChange}
                placeholder="Price"
              />
              <button type="submit" className="submitProduct">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
