import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedDate, setSelectedDate] = useState(null);
 

  const handleAddToCart = () => {
    // Pass the selectedDate along with the product ID to addToCart function
    addToCart(product.id, selectedDate);
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
        <div className="productdisplay-right-description">description</div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size">
            <div>100 sqm</div>
            <div>200 sqm</div>
          </div>
        </div>

        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Choose a date"
          dateFormat="MMMM d, yyyy"
          isClearable
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
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
