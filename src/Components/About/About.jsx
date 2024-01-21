import React from "react";
import grpphoto from "../Assets/grpphoto.jpg";
import "./About.css";
import "./Timeline.jsx";
import "../Contact/Contact.jsx";

const About = () => {
  return (
    <div className="about">
      <div className="abt-desc">
        <h2>Our Journey</h2>
        <img src={grpphoto} alt="Group Photo" />
        <p>
          The Cleaning Fairies is here to transform your home maintenance
          experience, making it efficient and stress-free!
        </p>
      </div>

      <div className="abt-desc2">
        <p>
          In January 2024, five friends introduced "Cleaning Fairies," a
          user-friendly website app designed to simplify household management.
          Easily book cleaning services, order top-notch cleaning products, and
          explore a household helper training program, all in one place!
        </p>
      </div>
    </div>
  );
};

export default About;
