import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product, addToCart } = useContext(ShopContext);

  return (
    <div className="service-display">
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <div key={i} className="item-container">
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                />
                <Link to={`/product/${item.id}`} className="book-now-button">
                  Book Now
                </Link>
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
