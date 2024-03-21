export const RoadmapCard = ({ roadmap }) => {
  return (
    <div className="roadmap-card">
      <h3>{roadmap.title}</h3>
      <pre>{JSON.stringify(roadmap, null, 2)}</pre>
    </div>
  );
};
