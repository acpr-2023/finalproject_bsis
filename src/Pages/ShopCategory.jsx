import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product, addToCart } = useContext(ShopContext);

  const handleAddToCart = (itemId) => {
    addToCart(itemId);
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
                />
                <button
                  onClick={() => handleAddToCart(item.id)}
                  className="add-to-cart-button"
                >
                  Add to Cart
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
