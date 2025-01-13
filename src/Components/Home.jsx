import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import hero from "../assets/hero.png";
import Typed from "typed.js";

const Home = () => {
  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1>"Welcome to my profile..." Hey, I'm Raja Pradhan</h1>
          <a
            href={pdf}
            download="resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
