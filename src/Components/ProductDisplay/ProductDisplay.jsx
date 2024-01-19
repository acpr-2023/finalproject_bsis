import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

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
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
