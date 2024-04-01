import { useState } from "react";
import "./Testimonial.css";
import person from "../../img/person.png";
import femalepfp from "../../img/femalepfp.png";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonial = () => {
  const testimonialData = [
    {
      role: "Software Engineer",
      name: "Ravi Patel",
      imgsrc: person,
      content:
        "Thanks to DevUnite's job search tools, I landed my dream job in record time.",
    },
    {
      role: "Data Analyst",
      name: "Priya Sharma",
      imgsrc: femalepfp,
      content:
        "DevUnite's coding communities made job searching effortless for me.",
    },
    {
      role: "IT Engineer",
      name: "Vikram Singh",
      imgsrc: person,
      content:
        "DevUnite's structured roadmaps helped me enhance my skills quickly.",
    },
    {
      role: "SDE-2",
      name: "Neha Gupta",
      imgsrc: femalepfp,
      content:
        "Participating in DevUnite's coding contests/hackathons boosted my confidence.",
    },
    {
      role: "Web Developer",
      name: "Aarav Kumar",
      imgsrc: person,
      content:
        "DevUnite's Discord resources were invaluable for me during job search.",
    },
    {
      role: "Machine Learning Engineer",
      name: "Sneha Reddy",
      imgsrc: femalepfp,
      content:
        "Thanks to DevUnite's expert-made structured roadmaps, I quickly mastered new skills.",
    },
    {
      role: "Cybersecurity Analyst",
      name: "Aryan Sharma",
      imgsrc: person,
      content:
        "DevUnite's coding communities provided me with valuable networking opportunities.",
    },
    {
      role: "Cloud Solutions Architect",
      name: "Nisha Patel",
      imgsrc: femalepfp,
      content:
        "DevUnite's job search tools helped me land multiple interviews in no time.",
    },
    {
      role: "DevOps Engineer",
      name: "Rohan Singh",
      imgsrc: person,
      content:
        "Participating in DevUnite's coding contests/hackathons honed my problem-solving skills.",
    },
    {
      role: "Frontend Developer",
      name: "Mridul Gupta",
      imgsrc: person,
      content:
        "DevUnite's structured roadmaps guided me in learning new frontend technologies efficiently.",
    },
  ];

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
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              role={testimonial.role}
              name={testimonial.name}
              imgsrc={testimonial.imgsrc}
              content={testimonial.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
