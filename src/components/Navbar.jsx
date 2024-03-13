// import darkmode from "../img/darkmode.png";
import { NavLink, Link } from "react-router-dom";
import Logo from "../img/Logo.png";
import { useState } from "react";
import "./Navbar.css";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="" className="title" />
      </Link>
      <div
        className="menu"
        onClick={() => {
          console.log("clicked on menu");
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/whydevsunite">Why DevsUnite?</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/roadmaps">Roadmaps</NavLink>
        </li>
        {/* <li>
          <NavLink>
            <img src={darkmode} alt="" className="darkmode" />
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};
