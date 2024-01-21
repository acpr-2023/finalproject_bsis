import React from "react";
import img1 from "../Assets/image1.png";
import img2 from "../Assets/image2.png";

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      image: img1, // Use the imported image directly
      text: "Sparking Joy, Spreading Smiles",
      text2:
        "We're not your average cleaning crew; we're happiness-makers with mops and brooms!",
    },
  ];

  const timelineData2 = [
    {
      id: 2,
      image: img2, // Use the imported image directly
      text: "Our mission is to turn chores into cheers. With B.R.I.G.H.T., we illuminate the path for our Cleaning Fairies:",
      text2:
        "(B)ringing joy into every corner, (R)ewarding with extra sunshine in earnings, (I)nstantly building a sense of family, (G)rowing together, (H)ighlighting the sparkle in simple moments, and (T)ransforming homes into havens.",
    },
  ];

  return (
    <div className="timeline-container">
      {timelineData.map((event) => (
        <div key={event.id} className="timeline-event">
          <div className="timeline-image">
            <img src={event.image} alt={`Event ${event.id}`} />
          </div>
          <div className="timeline-text timeline1">
            <p>{event.text}</p>
            <p>{event.text2}</p>
          </div>
        </div>
      ))}

      {timelineData2.map((event) => (
        <div key={event.id} className="timeline-event">
          <div className="timeline-text timeline2">
            <p>{event.text}</p>
            <p>{event.text2}</p>
          </div>

          <div className="timeline-image">
            <img src={event.image} alt={`Event ${event.id}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
