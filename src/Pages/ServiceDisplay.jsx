import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import "./CSS/ShopCategory.css";
import Hero2 from "../Components/Hero2/Hero2";

const ServiceDisplay = (props) => {
  const { all_product} = useContext(ShopContext);

  const filteredProducts = all_product.filter(
    (item) => props.category === item.category
  );

  return (
    <div>
      <Hero2 />

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
    </div>
  );
};

export default ServiceDisplay;
