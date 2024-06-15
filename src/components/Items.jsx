import React from "react";
import Details from "./Details";
function Items(props) {
  function showdetails(props)
  {
    return(
      <div>
        <Details />
      </div>
    );
  }
  return (
    <div className="product-listing">
      <div className="product-image">
        <img src={props.image} alt="null" onClick={clicked}/>
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
