import React from "react";
import "./Item.css";

const Item = ({ id, name, image, new_price, setSelectedItemId }) => {
  const handleClick = () => {
    // Set the selectedItemId when an item is clicked
    setSelectedItemId(id);
  };

  return (
    <div className="item" onClick={handleClick}>
      <img src={image} alt="" />
      <p>{name}</p>
      <div className="item-price-new">₱{new_price}</div>
    </div>
  );
};

export default Item;
