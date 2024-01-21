import React from "react";
import "./Item.css";

const Item = ({ id, name, image, new_price }) => {
  return (
    <div className="item">
      <img src={image} alt="" />
      <p>{name}</p>
      <div className="item-price-new">₱{new_price}</div>
    </div>
  );
};

export default Item;
