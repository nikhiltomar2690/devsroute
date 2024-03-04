import "./GetSkilled.css";
import skills from "../../img/skills.png";
import careergrowth from "../../img/careergrowth.png";
export const GetSkilled = () => {
  return (
    <div>
      <p className="title">
        Get Skilled With <span style={{ color: "#2cee91" }}>Roadmaps</span>
      </p>
      <div className="landingDiv">
        <img src={skills} alt="" className="skills" />
        <img src={careergrowth} alt="" className="landingimage" />
      </div>
    </div>
  );
};
