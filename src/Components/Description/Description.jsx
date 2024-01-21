import React from "react";
import "./Description.css";
import description_image from "../Assets/service_img.jpg";

const Description = () => {
  return (
    <div className="description">
      <div className="text-desc">
        <h1>We clean deeply so you can rest easy</h1>
        <p>
          We believe there’s nothing like coming home to a clean home. As a
          professional home cleaning service company, we are dedicated to
          helping un-mess people’s lives so you can focus on what matters most
          to you.
        </p>
        <button className="click-button">Read More...</button>
      </div>
      <div className="description_image">
        <img src={description_image} alt="" />
      </div>
    </div>
  );
};

export default Description;
