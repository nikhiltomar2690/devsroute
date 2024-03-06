import LandingImage from "../../img/homepage.png";
import "./Home.css";
import { Benefits } from "./Benefits.jsx";
import { GetSkilled } from "./GetSkilled.jsx";
import { Testimonial } from "./Testimonial.jsx";
import { NavLink } from "react-router-dom";
export const Home = () => {
  function scrollToTop() {
    window.scrollTo(0, 0); // Scrolls the page to the top
  }

  return (
    <>
      <div className="landingDiv">
        <div>
          <div>
            <p className="tagline">
              Empowering <span style={{ color: "#2cee91" }}>developers.</span>
              <br />
              Uniting <span style={{ color: "#2cee91" }}>opportunities.</span>
            </p>
          </div>
          <button className="downloadButton">Download App</button>
        </div>
        <div>
          <img src={LandingImage} alt="" className="landingimage" />
        </div>
      </div>
      <Benefits />
      <div id="benefits"></div>
      <GetSkilled />
      <Testimonial />
      <div className="div-container">
        <div className="downloadcard">
          <div className="text-container">
            <p className="download-mainheading">
              Start your coding journey with{" "}
              <span style={{ color: "#2cee91" }}>DevsUnite</span> today!
            </p>
            <p className="download-subheading">
              Discover, learn, connect, and innovate with DevsUnite. Find coding
              jobs, follow roadmaps, join communities, and <br /> never miss a
              hackathon. Join us and dive into the coding universe today!
            </p>
          </div>
          <button className="downloadButton">Download App</button>
        </div>
      </div>
      <footer>
        <div className="footer">
          <div className="row">
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </div>

          <div className="row">
            <ul>
              <li>
                <NavLink to="/contact">Contact us</NavLink>
              </li>
              <li>
                <NavLink to="/roadmaps">Roadmaps</NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={scrollToTop}>
                  DevsUnite
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms">Terms & Conditions</NavLink>
              </li>
            </ul>
          </div>

          <div className="row">
            DevsUnite Copyright © 2024 DevsUnite - All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
};
