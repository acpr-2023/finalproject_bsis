import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const handleAddToCart = () => {
    // Pass the selectedDateTime along with the product ID to addToCart function
    addToCart(product.id, selectedDateTime);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-new">
            ₱{product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>BOOK NOW</h1>
          <div className="productdisplay-right-size">
            <div>
              {" "}
              * Please note that this is a tentative booking schedule and is
              still subject to confirmation by our Client Management Team.
            </div>
            <div></div>
          </div>
        </div>

        {/* DatePicker with Time */}
        <DatePicker
          selected={selectedDateTime}
          onChange={(date) => setSelectedDateTime(date)}
          placeholderText="Choose date and time"
          dateFormat="MMMM d, yyyy h:mm aa"
          showTimeSelect
          timeFormat="h:mm aa"
          timeIntervals={15}
          isClearable
          popperClassName="custom-popper-class"
          calendarClassName="custom-calendar-class"
        />

        {/* ADD TO CART button */}
        <button onClick={handleAddToCart}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
