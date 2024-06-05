import React from "react";
function Items(props) {
  return (
    <div className="product-listing">
      <div className="product-image">
        <img src={props.image} alt="null" />
      </div>
      <div className="product-details">
        <div className="product-name">
          <strong>{props.name}</strong>
        </div>
        <div className="product-description">{props.description}</div>
        <div className="product-price">
          {props.price}
        </div>
      </div>
    </div>
  );
};

export default Items;
