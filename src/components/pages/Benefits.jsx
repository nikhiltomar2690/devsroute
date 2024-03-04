import "./Benefits.css";
import { Card } from "./Card";
import jobhunt from "../../img/Jobhunt.png";
import hackathon from "../../img/hackathon.png";
import community from "../../img/pair-program.png";
import roadmap from "../../img/roadmap.png";
export const Benefits = () => {
  return (
    <div>
      <p className="title">
        Benefits of <span style={{ color: "#2cee91" }}>DevsUnite</span>
      </p>
      <p className="fact">
        <span style={{ color: "#2cee91" }}>Coder Fact</span> : Coders often quit
        due to the lack of clear roadmaps, leaving them feeling lost. <br />
        Additionally, tracking multiple platforms can lead to crucial details
        slipping through the cracks.
      </p>
      <p className="fact">Now lets check out the offerings of DevsUnite!</p>
      <div className="cardsdiv">
        <Card text="Find Jobs" imgsrc={jobhunt} />
        <Card text="Learn with Roadmaps" imgsrc={roadmap} />
        <Card text="Join Coding Communities" imgsrc={community} />
        <Card text="Get Hackathon Reminders" imgsrc={hackathon} />
      </div>
    </div>
  );
};
