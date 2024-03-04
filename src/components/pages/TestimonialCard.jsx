import "./TestimonialCard.css";

export const TestimonialCard = (props) => {
  return (
    <div className="card-testimonial">
      <img src={props.imgsrc} alt="" className="card-img" />
      <p className="card-name">{props.name}</p>
      <p className="card-role">{props.role}</p>
      <p className="card-content">{props.content}</p>
    </div>
  );
};
