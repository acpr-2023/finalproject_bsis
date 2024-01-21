import React, { useContext, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product, addToCart } = useContext(ShopContext);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  const handleAddToCart = (itemId) => {
    addToCart(itemId);
    // Optionally, you can reset the selectedItemId after adding to the cart
    setSelectedItemId(null);
  };

  return (
    <div className="shop-category">
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <div key={i}>
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  setSelectedItemId={handleItemClick}
                />
                {/* Add to Cart button for each item */}
                <button
                  onClick={() => handleAddToCart(item.id)}
                  className="add-to-cart-button"
                >
                  ADD TO CART
                </button>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
