// import React from 'react';
// const Details = () => {
  // const { id } = useParams();  // Extract the id from the URL
  // const item = itemList.find(item => item.id === parseInt(id));  // Find the item by id
  // const { addToCart } = useCart();  // Get the addToCart function from the context

  // const handleAddToCart = (item) => {
  //   addToCart(item);
  //   alert('Product added to cart');
  // };

  // if (!item) {
  //   return <div>Item not found</div>;
  // }

  // let detailsToShow = null;

//   // Determine what details to display based on the category
//   if (item.category === 'clothing') {
//     detailsToShow = (
//       <div className="details-size">
//         <p>Select Size:</p>
//         <div className="sizes">
//           {["S", "M", "L", "XL", "XXL"].map(size => (
//             <span key={size}>{size}</span>
//           ))}
//         </div>
//       </div>
//     );
//   } else if (item.category === 'laptop') {
//     detailsToShow = (
//       <div className="details-description">
//         <p>Description: {item.description}</p>
//       </div>
//     );
//   } else if (item.category === 'vehicle') {
//     detailsToShow = (
//       <div className="details-description">
//         <p>Description: {item.description}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="details-container">
//       <div className="details-images">
//         {[...Array(5)].map((_, index) => (
//           <div key={index} className="details-image">
//             <img src={item.image} alt={item.name} />
//           </div>
//         ))}
//       </div>
//       <div className="details-main">
//         <div className="details-main-image">
//           <img src={item.image} alt={item.name} />
//         </div>
//         <div className="details-info">
//           <h1>{item.name}</h1>
//           {detailsToShow}
//           <div className="details-price">Price: Rs{item.price}</div>
//           <div className="details-rating">
//             <span>★★★★☆ (122)</span>
//           </div>
//           <button className="add-to-cart" onClick={() => handleAddToCart(item)}>Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Details;
import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Assuming you're using react-router for URL params

import itemList from '../item';  // Import the list of items
import { useCart } from './CartContext';  // Import the cart context

import minusIcon from "/images/icon-minus.svg";
import plusIcon from "/images/icon-plus.svg";

function Details() {
  const [quantity, setQuantity] = useState(0);
  const [mainImageIndex, setMainImageIndex] = useState(0); // Track the main image index

  const { id } = useParams();  // Extract the id from the URL
  const item = itemList.find(item => item.id === parseInt(id));  // Find the item by id
  const { addToCart } = useCart();  // Get the addToCart function from the context

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  const handleAddToCart = () => {
    if (quantity > 0 && item.status !== "sold") {
      addToCart({ ...item, quantity });
      alert('Product added to cart');
    } else if (quantity === 0) {
      alert('Please select a quantity');
    } else if (item.status === "sold") {
      alert('This item is sold out');
    }
  };

  if (!item) {
    return <div>Item not found</div>;
  }

  // Handle rendering of size or description based on category
  let detailsToShow = null;
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
  } 

  const images = item.images || [item.image]; // Fallback if item only has one image

  return (
    <div>
      <main className='details-container'>
        <article className="product">
          <section className="product__slider default-container" aria-label="Product preview">
            {/* Main Image */}
            <div className="image-box" aria-label="Product preview" role="region">
              <img 
                src={images[mainImageIndex]} 
                alt={`Image of ${item.name}`} 
                className="image-box__src" 
              />
            </div>

            {/* Thumbnails */}
            <ul className="product__thumbs default-container" aria-label="Product thumbnails">
              {images.map((image, index) => (
                <li key={index} className="thumb-item">
                  <button 
                    type="button" 
                    className="thumb-item__btn" 
                    aria-label={`Thumbnail ${index + 1}`}
                    onClick={() => setMainImageIndex(index)}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} />
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section className="product__content default-container" aria-label="Product content">
            <header>
              <h2 className="company-name">{item.brand || "Product Brand"}</h2>
              <p className="product__name">{item.name}</p>
              <h3 className="product__title">{item.name}</h3>
            </header>
            <p className="product__description">
              {item.description || "This is a great product."}
            </p>
            {detailsToShow}

            <div className="product__price">
              <div className="discount-price">
                <p className="discount-price__value">
                  Rs{item.price}
                </p>
              </div>
            </div>

            {/* Display sold-out message if the item is sold */}
            {item.status === "sold" && (
              <p className="sold-out-message">This item is sold out.</p>
            )}

            <form action="#" className="cart-form">
              <div className="cart-form__input-container" aria-label="Define the product quantity">
                <button type="button" className="btn-changeValue minus-item" onClick={decrementQuantity} disabled={item.status === "sold"}>
                  <span className="sr-only">Minus one item</span>
                  <img src={minusIcon} alt="Minus icon" />
                </button>
                <input
                  type="number"
                  min="0"
                  value={quantity}
                  id="product__quantity"
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  disabled={item.status === "sold"}
                />
                <button type="button" className="btn-changeValue plus-item" onClick={incrementQuantity} disabled={item.status === "sold"}>
                  <span className="sr-only">Plus one item</span>
                  <img src={plusIcon} alt="Plus icon" />
                </button>
              </div>
              {/* Disable Add to Cart button if item is sold */}
              <button type="button" className="cart-form__add-btn" onClick={handleAddToCart} disabled={item.status === "sold"}>
                <span>{item.status === "sold" ? "Sold Out" : "Add to cart"}</span>
              </button>
            </form>
          </section>
        </article>
      </main>
    </div>
  );
}

export default Details;
