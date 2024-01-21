import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './TrainingInquire.css';
import trainingHeader from "../Assets/trainingheader.jpg";
import trainingHeader_2 from "../Assets/trainingheader_2.jpg";
import trainingHeader_3 from "../Assets/trainingheader_3.jpg";
import Trainers from "../Assets/trainingheader.jpg";


const TrainingInquire = () => {
  const [shouldShowImageText, setShouldShowImageText] = useState(true);

  const toggleImageTextVisibility = () => {
    setShouldShowImageText(prevState => !prevState);
  };

  const ImageText = ({ imageUrl, title, description, buttonText, buttonLink }) => {
    return (
      <div className="image-text">
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={buttonLink} className="button">{buttonText}</a>
      </div>
    );
  };

  return (
    <main id="MainContent" className="content-for-layout focus-none" role="main" tabIndex="-1">
      <button onClick={toggleImageTextVisibility} className="toggle-button">
        {shouldShowImageText ? 'Hide Details' : 'Show Details'}
      </button>

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
            <img src={trainingHeader} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={trainingHeader_2} alt="Slide 2" />
          </SwiperSlide>
             <img src={trainingHeader_3} alt="Slide 2" />
        </Swiper>
      </section>

      <section>
        <div className="rich-text content-container color-background-1 gradient rich-text--full-width content-container--full-width">
          <div className="rich-text__wrapper rich-text__wrapper--center page-width">
            <div className="rich-text__blocks center">
              <h2 className="rich-text__heading rte h1">
                <span>Household Helper Training Program</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {shouldShowImageText && (
        <section>
        <ImageText 
          imageUrl={Trainers}
          title="Learn the Happy Helpers method of cleaning and disinfecting"
          description="Professionalize the skills of your household help in our comprehensive training workshops tailor-fit to your home's needs."
          buttonText="Inquire Now"
          buttonLink="https://m.me/HappyHelpersManila"
        />
        {/* Repeat ImageText for other sections as needed */}
      </section>
      
      )}
      {/* Additional content sections can be added here if needed */}
    </main>
  );
};

export default TrainingInquire
