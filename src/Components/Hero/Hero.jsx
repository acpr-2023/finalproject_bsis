import React from "react";
import "./Hero.css";
import hero_image from "../Assets/cleaning_fairy.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>SPARKLING NEAT</h2>
        <div className="hero-hand-icon">
          <p>We take the mess</p>
        </div>
        <p>out of your stress</p>
        <button className="contact-button">Contact Us</button>
      </div>
      <div className="hero-latest-btn"></div>
      <div className="hero-right-image">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
