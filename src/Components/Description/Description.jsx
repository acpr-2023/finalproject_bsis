import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Description.css";
import description_image from "../Assets/service_img.jpg";

const Description = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate('/about');
  };

  return (
    <div className="description">
      <div className="text-desc">
        <h1>The Best Cleaners Are Ready For Your Home</h1>
        <p>
          We're firm believers that nothing beats the comfort of walking into a
          freshly cleaned home. As a dedicated home cleaning service, our aim is
          to simplify people's lives, giving you the freedom to focus on what
          truly matters to you.
        </p>
        <button className="click-button" onClick={handleReadMoreClick}>
          Read More...
        </button>
      </div>
      <div className="description_image">
        <img src={description_image} alt="" />
      </div>
    </div>
  );
};

export default Description;
