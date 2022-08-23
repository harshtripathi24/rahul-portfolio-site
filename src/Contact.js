import React from "react";
import "./Styles/Contact.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="ContactDiv">
      <h2>Contact Me</h2>
      <div className="container">
        <div className="col 1">
          <div className="header">
            <div className="line" /> <h3>Phone No</h3>
          </div>
          <a href="tel:+99814309604">99814309604</a>
        </div>
        <div className="col 1">
          <div className="header">
            <div className="line" /> <h3>My Email</h3>
          </div>
          <a href="mailto:exapmle@gmail.com">example@gmail.com</a>
        </div>
        <div className="col 1">
          <div className="header">
            <div className="line" /> <h3>Socials</h3>
          </div>
          <div className="socialIcons">
            <a target="_blank" href="http://www.facebook.com">
              <FaFacebook />
            </a>
            <a target="_blank" href="http://www.instgram.com">
              <FaInstagram />
            </a>
            <a target="_blank" href="http://www.twitter.com">
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
