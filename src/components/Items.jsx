import React from "react";
import { Link } from "react-router-dom";

function Items(props) {
  return (
    <div className="product-listing">
      <div className="product-image">
        <Link to={`/details/${props.id}`}>
          <img src={props.image} alt="null" />
        </Link>
      </div>
      <div className="product-details">
        <div className="product-name">
          <strong>{props.name}</strong>
        </div>
        <div className="product-description">{props.description}</div>
        <div className="product-price">{props.price}</div>
      </div>
    </div>
  );
}

export default Items;
