import "./RoadmapCard.css";

export const RoadmapCard = ({ roadmap }) => {
  return (
    <div className="roadmap-card">
      <h3>{roadmap.title}</h3>
      <p>{roadmap.description}</p>
      <br />
      <p className="start-learning">Start Learning</p>
    </div>
  );
};
