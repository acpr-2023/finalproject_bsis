import React from "react";
import "./SGallery.css";
import { Link } from 'react-router-dom';
import gallery_image from "../Assets/gallery1.png";
import gallery_image2 from "../Assets/gallery2.png";
import gallery_image3 from "../Assets/gallery3.png";

const Gallery = () => {
  return (
    <div class="project">
      <h1>Our Services</h1>
      <h2>We've got what you need!</h2>
      <div className="project-container">
        <div className="project-box">
          <div className="gallery_image">
            <img src={gallery_image} alt="" />
          </div>
          <h3>Deep Living Room Cleaning</h3>
          <p>
            Always best after deep cleaning service to complete the whole
            process 360 degrees cleaning...
          </p>
          <a href="#" class="btn">
            To Look Forward
          </a>
        </div>

        <div className="project-box">
          <div className="gallery_image2">
            <img src={gallery_image2} alt="" />
          </div>
          <h3>Deep Living Room Cleaning</h3>
          <p>
            Always best after deep cleaning service to complete the whole
            process 360 degrees cleaning...
          </p>
          <a href="#" class="btn">
            To Look Forward
          </a>
        </div>

        <div className="project-box">
          <div className="gallery_image3">
            <img src={gallery_image3} alt="" />
          </div>
          <h3>Deep Bathroom Cleaning</h3>
          <p>
            Always best after deep cleaning service to complete the whole
            process 360 degrees cleaning...
          </p>
          <a href="#" className="btn">
            To Look Forward
          </a>
        </div>

        <div className="project-box">
          <div className="gallery_image">
            <img src={gallery_image} alt="" />
          </div>
          <h3>Deep Living Room Cleaning</h3>
          <p>
            Always best after deep cleaning service to complete the whole
            process 360 degrees cleaning...
          </p>
          <a href="#" class="btn">
            To Look Forward
          </a>
        </div>

        <div className="project-box">
          <div className="gallery_image2">
            <img src={gallery_image2} alt="" />
          </div>
          <h3>Deep Living Room Cleaning</h3>
          <p>
            Always best after deep cleaning service to complete the whole
            process 360 degrees cleaning...
          </p>
          <a href="#" class="btn">
            To Look Forward
          </a>
        </div>

        <div className="project-box">
          <div className="gallery_image3">
            <img src={gallery_image3} alt="" />
          </div>
          <h3>Deep Bathroom Cleaning</h3>
          <p>
            Always best after deep cleaning service to complete the whole
            process 360 degrees cleaning...
          </p>
          <a href="#" className="btn">
            To Look Forward
          </a>
        </div>

        <div className="more-projects-button">
          <Link to="/services" className="btn">
            More Services - Click Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
