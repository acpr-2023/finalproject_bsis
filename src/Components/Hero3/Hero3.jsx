import React from "react";
import "./Hero3.css";
import all_product from '../Assets/all_product';
import hero_image from "../Assets/heroproducts.png";

const Hero3 = () => {
  return (
    <div>
      {/* Header Content */}
      <header className="hero-header">
        <h1>Your Header Title</h1>
      </header>

      {/* Rest of the Hero3 content */}
      <div className="hero3">
        <div className="hero3-left">
          <h2>PRODUCTS</h2>
          <div className="products-container">
            {all_product.map((product) => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Price: {product.new_price}</p>
                {/* Include more details as needed */}
              </div>
            ))}
          </div>
        </div>
        <div className="hero3-right-image">
          <img src={hero_image} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero3;
