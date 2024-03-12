import LandingImage from "../../img/homepage.png";
import "./Home.css";
import { Benefits } from "./Benefits.jsx";
import { GetSkilled } from "./GetSkilled.jsx";
import { Testimonial } from "./Testimonial.jsx";
import { ContainerScroll } from "../pages/Laptop.jsx";
import { NavLink } from "react-router-dom";

export const Home = () => {
  // const words = [
  //   {
  //     text: "Build",
  //   },
  //   {
  //     text: "awesome",
  //   },
  //   {
  //     text: "projects",
  //   },
  //   {
  //     text: "with",
  //   },
  //   {
  //     text: "DevsRoute.",
  //     className: "text-blue-500 dark:text-blue-500",
  //   },
  // ];
  const users = [
    {
      name: "Sarah Singh",
      designation: "Founder, Sarah's Kitchen",
      image: "https://picsum.photos/id/11/300/300",
      badge: "Mentor",
    },
    {
      name: "John Doe",
      designation: "Software Engineer, Tech Corp",
      image: "https://picsum.photos/id/12/300/300",
      badge: "Mentor",
    },
    {
      name: "Jane Smith",
      designation: "Product Manager, Innovate Inc",
      image: "https://picsum.photos/id/13/300/300",
      badge: "Mentor",
    },
    {
      name: "Robert Johnson",
      designation: "Data Scientist, DataWorks",
      image: "https://picsum.photos/id/14/300/300",
      badge: "Mentor",
    },
    {
      name: "Emily Davis",
      designation: "UX Designer, DesignHub",
      image: "https://picsum.photos/id/15/300/300",
      badge: "Mentor",
    },
    {
      name: "Michael Miller",
      designation: "CTO, FutureTech",
      image: "https://picsum.photos/id/16/300/300",
      badge: "Mentor",
    },
    {
      name: "Sarah Brown",
      designation: "CEO, StartUp",
      image: "https://picsum.photos/id/17/300/300",
    },
    {
      name: "James Wilson",
      designation: "DevOps Engineer, CloudNet",
      image: "https://picsum.photos/id/18/300/300",
      badge: "Something",
    },
    {
      name: "Patricia Moore",
      designation: "Marketing Manager, MarketGrowth",
      image: "https://picsum.photos/id/19/300/300",
      badge: "Mentor",
    },
    {
      name: "Richard Taylor",
      designation: "Frontend Developer, WebSolutions",
      image: "https://picsum.photos/id/20/300/300",
    },
    {
      name: "Linda Anderson",
      designation: "Backend Developer, ServerSecure",
      image: "https://picsum.photos/id/21/300/300",
    },
    {
      name: "William Thomas",
      designation: "Full Stack Developer, FullStack",
      image: "https://picsum.photos/id/22/300/300",
      badge: "Badger",
    },
    {
      name: "Elizabeth Jackson",
      designation: "Project Manager, ProManage",
      image: "https://picsum.photos/id/23/300/300",
      badge: "Mentor",
    },
    {
      name: "David White",
      designation: "Database Administrator, DataSafe",
      image: "https://picsum.photos/id/24/300/300",
      badge: "Advocate",
    },
    {
      name: "Jennifer Harris",
      designation: "Network Engineer, NetConnect",
      image: "https://picsum.photos/id/25/300/300",
    },
    {
      name: "Charles Clark",
      designation: "Security Analyst, SecureIT",
      image: "https://picsum.photos/id/26/300/300",
    },
    {
      name: "Susan Lewis",
      designation: "Systems Analyst, SysAnalyse",
      image: "https://picsum.photos/id/27/300/300",
    },
    {
      name: "Joseph Young",
      designation: "Mobile Developer, AppDev",
      image: "https://picsum.photos/id/28/300/300",
      badge: "Mentor",
    },
    {
      name: "Margaret Hall",
      designation: "Quality Assurance, BugFree",
      image: "https://picsum.photos/id/29/300/300",
      badge: "Developer",
    },
  ];

  function scrollToTop() {
    window.scrollTo(0, 0); // Scrolls the page to the top
  }

  return (
    <>
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white ">
              Become a <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-8 md:mt-3 leading-none ipad-text">
                10x Developer
              </span>
            </h1>
          </>
        }
      />

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
      {/* <div className="typewriter">
        <TypewriterEffectSmooth words={words} />
      </div> */}

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
