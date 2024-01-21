import React from "react";
import "./SGallery.css";
import { Link } from "react-router-dom";
import gallery_image from "../Assets/servi1.png";
import gallery_image2 from "../Assets/servi2.png";
import gallery_image3 from "../Assets/servi3.png";
import gallery_image4 from "../Assets/servi4.png";
import gallery_image5 from "../Assets/servi5.png";
import gallery_image6 from "../Assets/servi6.png";

const SGallery = () => {
  return (
    <div class="project">
      <h1>Our Services</h1>
      <h2>We've got what you need!</h2>
      <div className="project-container">
        <div className="project-box">
          <div className="gallery_image">
            <img src={gallery_image} alt="" />
          </div>
          <h3>Deep Cleaning</h3>
          <p>
            Thorough cleaning, targeting overlooked areas, for a refreshed,
            sanitized environment.
          </p>
          <Link to="/services" class="btn">
            Look More...
          </Link>
        </div>

        <div className="project-box">
          <div className="gallery_image2">
            <img src={gallery_image2} alt="" />
          </div>
          <h3>Post Construction Cleaning</h3>
          <p>
            Specialized cleaning after construction, ensuring a spotless, safe,
            and organized space.
          </p>
          <Link to="/services" class="btn">
            Look More...
          </Link>
        </div>

        <div className="project-box">
          <div className="gallery_image3">
            <img src={gallery_image3} alt="" />
          </div>
          <h3>Move-in, Move-out Cleaning</h3>
          <p>
            Efficient cleaning for smooth transitions, leaving spaces pristine
            and refreshed.
          </p>
          <Link to="/services" class="btn">
            Look More...
          </Link>
        </div>

        <div className="project-box">
          <div className="gallery_image">
            <img src={gallery_image4} alt="" />
          </div>
          <h3>Disinfection Fogging</h3>
          <p>
            Advanced fogging technique for comprehensive disinfection, ensuring
            a germ-free environment.
          </p>
          <Link to="/services" class="btn">
            Look More...
          </Link>
        </div>

        <div className="project-box">
          <div className="gallery_image2">
            <img src={gallery_image5} alt="" />
          </div>
          <h3>Subscription Cleaning</h3>
          <p>
            Regular cleaning services on a subscription basis for consistent
            home maintenance.
          </p>
          <Link to="/services" class="btn">
            Look More...
          </Link>
        </div>

        <div className="project-box">
          <div className="gallery_image3">
            <img src={gallery_image6} alt="" />
          </div>
          <h3>Office Cleaning Service</h3>
          <p>
            Professional office cleaning for a pristine, organized, and
            productive workspace environment.
          </p>
          <Link to="/services" class="btn">
            Look More...
          </Link>
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

export default SGallery;
