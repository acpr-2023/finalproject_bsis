import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>SPARKLING NEAT</h2>
        <div className="hero-hand-icon">
          <p>We take the mess</p>
        </div>
        <p>out of your stress</p>
      </div>
      <div className="hero-latest-btn"></div>
      <div className="here-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
