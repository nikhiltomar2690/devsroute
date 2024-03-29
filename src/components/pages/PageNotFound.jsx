import "./PageNotFound.css"; // Import your CSS file
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div id="mainC">
      <div className="message">
        <h1>404</h1>
        <h3>the page you seek does not exist</h3>
      </div>
      <div className="footer">
        <Link to="/" title="Home" className="homebtn">
          Home <span></span>
        </Link>
        <p className="legal">
          Copyright &copy; 2024 DevsUnite&trade; All rights reserved
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
