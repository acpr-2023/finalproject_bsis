import React from "react";
import "./Hero2.css";
import hero_image from "../Assets/cleaning_fairy.png";

const Hero2 = () => {
  return (
    <div className="hero2">
      <div className="hero2-left">
        <h2>OUR SERVICES</h2>
      </div>
      <div className="hero2-right-image">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero2;
