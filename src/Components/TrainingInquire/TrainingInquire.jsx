import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Typed from "typed.js";

import "./TrainingInquire.css";
import headerClean from "../Assets/headerClean.jpg";
import trainingHeader_2 from "../Assets/CleaningService.png";
import trainingHeader_3 from "../Assets/CleaningService_2.png";
import basicCleaning from "../Assets/basiccleaning.jpg";
import trainers from "../Assets/trainingheader.jpg";
import green from "../Assets/green.jpg";
import time from "../Assets/time.jpg";

const TrainingInquire = () => {
  const typedTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTarget.current, {
      strings: [
        "Household Helper Training Program",
        "Professional Cleaning Techniques",
        "Advanced Home Care Skills",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const ImageText = ({
    imageUrl,
    title,
    description,
    additionalDescription,
    buttonText,
    buttonLink,
  }) => {
    const createMarkup = (htmlContent) => {
      return { __html: htmlContent };
    };
    return (
      <div className="image-text">
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <br />
        {additionalDescription && (
          <p dangerouslySetInnerHTML={createMarkup(additionalDescription)}></p> // Render the additional description as HTML
        )}
        <a href={buttonLink} className="button">
          {buttonText}
        </a>
      </div>
    );
  };

  return (
    <main
      id="MainContent"
      className="content-for-layout focus-none"
      role="main"
      tabIndex="-1"
    >
      <section>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img src={headerClean} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={trainingHeader_2} alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={trainingHeader_3} alt="Slide 3" />
          </SwiperSlide>
        </Swiper>
      </section>

      <section>
        <h2 className="rich-text__heading" ref={typedTarget}>
          {/* Typed.js will insert text here */}
        </h2>
      </section>

      <section>
        <div className="image-text-container">
          <ImageText
            imageUrl={basicCleaning}
            title="Basic Cleaning Skills Program"
            description="This program is designed for individuals who want to master the foundational skills of household cleaning."
            additionalDescription="<b>Hands-On Training:</b> Participants will practice cleaning various surfaces, learn to use different cleaning tools, and develop efficient cleaning routines.</span>"
            buttonText="Inquire Now"
            buttonLink="https://m.me/HappyHelpersManila"
          />

          <ImageText
            imageUrl={trainers}
            title="Advanced Specialty Cleaning Program"
            description="Ideal for those who want to specialize in tackling specific cleaning challenges and maintaining specialized areas."
            additionalDescription="<b>Hands-On Training:</b> Participants will gain hands-on experience in dealing with specialized cleaning tasks, using advanced cleaning equipment, and handling delicate surfaces.</span>"
            buttonText="Inquire Now"
            buttonLink="https://m.me/HappyHelpersManila"
          />
          <ImageText
            imageUrl={green}
            title="Green Cleaning and Eco-Friendly Practices Program"
            description="This program focuses on environmentally friendly cleaning methods and sustainable practices."
            additionalDescription="<b>Hands-On Training:</b> Participants will learn to identify and use eco-friendly cleaning products, implement sustainable cleaning practices, and create their own green cleaning solutions.</span>"
            buttonText="Inquire Now"
            buttonLink="https://m.me/HappyHelpersManila"
          />
          <ImageText
            imageUrl={time}
            title="Time Management and Organization Program"
            description="Tailored for clients looking to optimize their cleaning routines, balancing efficiency with thoroughness."
            additionalDescription="<b>Hands-On Training:</b> Participants will work on developing personalized cleaning schedules, organizing spaces effectively, and mastering time-saving cleaning techniques.</span>"
            buttonText="Inquire Now"
            buttonLink="https://m.me/HappyHelpersManila"
          />
        </div>
      </section>

      {/* Additional content sections can be added here if needed */}
    </main>
  );
};

export default TrainingInquire;
