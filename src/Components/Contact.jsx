import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.linkedin.com/in/raja-pradhan/"
            target="_blank"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a
            href="https://x.com/pradhanraja780"
            target="_blank"
            className="items"
          >
            <FaSquareXTwitter className="icons" />
          </a>
          <a
            href="https://github.com/RAJAPRADHAN242004"
            target="_blank"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:pradhanraja780@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
