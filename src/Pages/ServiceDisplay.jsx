import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import "./CSS/ShopCategory.css";

const ServiceDisplay = (props) => {
  const { all_product, addToCart } = useContext(ShopContext);

  const filteredProducts = all_product.filter(
    (item) => props.category === item.category
  );

  return (
    <div className="service-display">
      <div className="shopcategory-products">
        {filteredProducts.map((item) => (
          <div key={item.id} className="item-container">
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
        ))}
      </div>
    </div>
  );
};

export default ServiceDisplay;
