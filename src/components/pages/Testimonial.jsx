import React, { useState } from "react";
import "./Testimonial.css";
import person from "../../img/person.png";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonial = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="testimonial-container">
      <p className="title">
        Developer <span style={{ color: "#2cee91" }}>Testimonials</span>
      </p>
      <div
        className="cards-testimonial-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`cards-testimonial ${isPaused ? "paused" : ""}`}>
          <TestimonialCard
            role="SDE @NI"
            name="Jos Buttler"
            imgsrc={person}
            content="Big shoutout to DevsUnite for their amazing job features! They made my job hunt smooth sailing. Much appreciated!"
          />
          <TestimonialCard
            role="SDE-3 @Microsoft"
            name="Jos Buttler"
            imgsrc={person}
            content="Big shoutout to DevsUnite for their amazing job features! They made my job hunt smooth sailing. Much appreciated!"
          />
          <TestimonialCard
            role="SDE-3 @Microsoft"
            name="Jos Buttler"
            imgsrc={person}
            content="Big shoutout to DevsUnite for their amazing job features! They made my job hunt smooth sailing. Much appreciated!"
          />
          <TestimonialCard
            role="SDE-3 @Microsoft"
            name="Jos Buttler"
            imgsrc={person}
            content="Big shoutout to DevsUnite for their amazing job features! They made my job hunt smooth sailing. Much appreciated!"
          />
          <TestimonialCard
            role="Data Scientist @Harness"
            name="Jos Buttler"
            imgsrc={person}
            content="Big shoutout to DevsUnite for their amazing job features! They made my job hunt smooth sailing. Much appreciated!"
          />
        </div>
      </div>
    </div>
  );
};
