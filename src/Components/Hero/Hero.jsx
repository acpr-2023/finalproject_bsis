import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import hero_image from "../Assets/cleaning_fairy.png";

const Hero = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/about"); // Navigates to the About page
  };

  return (
    <div className="hero">
      <div className="hero-left">
        <h2>SPARKLING NEAT</h2>
        <div className="hero-hand-icon">
          <p>We take the mess</p>
        </div>
        <p>out of your stress</p>
        <button className="contact-button" onClick={handleContactClick}>
          Contact Us
        </button>
      </div>
      <div className="hero-right-image">
        <img src={hero_image} alt="Cleaning Fairy" />
      </div>
    </div>
  );
};

export default Hero;
