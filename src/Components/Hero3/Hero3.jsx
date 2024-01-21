import React from "react";
import "./Hero3.css";
import hero_image from "../Assets/cleaning_fairy.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>PRODUCTS</h2>
      </div>
      <div className="hero-right-image">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
