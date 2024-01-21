// ServiceDisplay.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import "./CSS/ShopCategory.css";

const ServiceDisplay = (props) => {
  const { all_product, addToCart } = useContext(ShopContext);

  return (
    <div className="service-display">
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <div key={i} className="item-container">
                <div>
                  <Item
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                  />
                </div>
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

export default ServiceDisplay;
