import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products/ Services</p>
        <p>Title</p>
        <p>Booking Date</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id]?.quantity > 0) {
          const selectedDate = cartItems[e.id]?.selectedDate;
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>
                  {selectedDate instanceof Date
                    ? selectedDate.toLocaleDateString()
                    : selectedDate}
                </p>
                <p>₱{e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]?.quantity}
                </button>
                <p>₱{e.new_price * cartItems[e.id]?.quantity}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-donw">{/* ... (rest of the component) */}</div>
    </div>
  );
};

export default CartItems;
