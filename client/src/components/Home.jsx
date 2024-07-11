import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Items from './Items';
import Navbar from './Navbar';
import item from '../item'; // Sample data, replace with API calls
import { AuthContext } from './AuthContext';

function createInput(item) {
  return (
    <Items
      key={item._id || item.id} // Use _id for MongoDB data, id for local data
      id={item._id || item.id}
      image={item.image}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  );
}

function Home() {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  const [items, setItems] = useState(item); // Initialize with local data
  const [newItem, setNewItem] = useState({
    image: '',
    name: '',
    description: '',
    price: '',
    category: ''
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
      else{
        fetchItems();
      }
  }, [isAuthenticated, navigate]);

  const fetchItems = async () => {
    try {
      const response = await fetch("https://thapar-olx-1.onrender.com/api/products");
      const data = await response.json();
      setItems(prevItems => [...prevItems, ...data]); // Merge local and fetched data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

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
    try {
      const response = await fetch("https://thapar-olx-1.onrender.com/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
      });
      const addedProduct = await response.json();
      setItems((prevItems) => [...prevItems, addedProduct]);
      setNewItem({
        image: '',
        name: '',
        description: '',
        price: '',
        category: ''
      });
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleClose = () => {
    setIsFormVisible(false);
  };
  // const handleRemoveProduct= async(e)=>
  // {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("https://thapar-olx-1.onrender.com/api/products", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(newItem)
  //     });
  //     const addedProduct = await response.json();
  //     setItems((prevItems) => [...prevItems]);
  //     setNewItem({
  //       image: '',
  //       name: '',
  //       description: '',
  //       price: '',
  //       category: ''
  //     });
  //     setIsFormVisible(false);
  //   } catch (error) {
  //     console.error("Error adding product:", error);
  //   }
  // }
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
        {/* <button className="addProduct" onClick={handleRemoveProduct}>
          Remove Product
        </button> */}
      </div>
      
      {isFormVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
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
              <input
                type="text"
                name="category"
                value={newItem.category}
                onChange={handleInputChange}
                placeholder="Category"
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
