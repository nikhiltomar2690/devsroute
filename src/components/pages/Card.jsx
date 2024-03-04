import "./Card.css";

export const Card = (props) => {
  return (
    <div className="card">
      <p className="card-text">{props.text}</p>
      <img src={props.imgsrc} alt="" className="card-image" />
    </div>
  );
};
