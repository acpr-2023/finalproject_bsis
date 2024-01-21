import React, { useState, useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCloseForms = () => {
    setShowCheckoutForm(false);
    setShowConfirmation(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowConfirmation(true);
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products/ Services</p>
        <p>Title</p>
        <p>Booking --- Date Time</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id]?.quantity > 0) {
          const selectedDateTime = cartItems[e.id]?.selectedDateTime;

          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>
                  {selectedDateTime instanceof Date
                    ? selectedDateTime.toLocaleString()
                    : selectedDateTime}
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
      <div className="cartitems-donw">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₱{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₱{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={() => setShowCheckoutForm(true)}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>

      {showCheckoutForm && (
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="checkout-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="checkout-field">
            <label htmlFor="email">E-mail </label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="checkout-field">
            <label htmlFor="email">Number</label>
            <input
              type="number"
              id="number"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="checkout-field">
            <label htmlFor="email">Address</label>
            <input type="text" id="address" placeholder="Enter your address" />
          </div>
          <button type="submit">Place Order</button>
        </form>
      )}

      {showConfirmation && (
        <div className="order-confirmation-modal">
          <h2>Order Confirmed!</h2>
          <p>
            Thank you for your order! Your confirmation details have been sent
            to your email. Please be reminded that your booking is subject to
            confirmation by our Client Management Team.
          </p>
          <button onClick={handleCloseForms}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CartItems;
