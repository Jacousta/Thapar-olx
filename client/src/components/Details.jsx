import React from 'react';
import { useParams } from 'react-router-dom';
import itemList from '../item';  // Import the list of items
import { useCart } from './CartContext';  // Import the cart context

const Details = () => {
  const { id } = useParams();  // Extract the id from the URL
  const item = itemList.find(item => item.id === parseInt(id));  // Find the item by id
  const { addToCart } = useCart();  // Get the addToCart function from the context

  const handleAddToCart = (item) => {
    addToCart(item);
    alert('Product added to cart');
  };

  if (!item) {
    return <div>Item not found</div>;
  }

  let detailsToShow = null;

  // Determine what details to display based on the category
  if (item.category === 'clothing') {
    detailsToShow = (
      <div className="details-size">
        <p>Select Size:</p>
        <div className="sizes">
          {["S", "M", "L", "XL", "XXL"].map(size => (
            <span key={size}>{size}</span>
          ))}
        </div>
      </div>
    );
  } else if (item.category === 'laptop') {
    detailsToShow = (
      <div className="details-description">
        <p>Description: {item.description}</p>
      </div>
    );
  } else if (item.category === 'vehicle') {
    detailsToShow = (
      <div className="details-description">
        <p>Description: {item.description}</p>
      </div>
    );
  }

  return (
    <div className="details-container">
      <div className="details-images">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="details-image">
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
      <div className="details-main">
        <div className="details-main-image">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="details-info">
          <h1>{item.name}</h1>
          {detailsToShow}
          <div className="details-price">Price: Rs{item.price}</div>
          <div className="details-rating">
            <span>★★★★☆ (122)</span>
          </div>
          <button className="add-to-cart" onClick={() => handleAddToCart(item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
