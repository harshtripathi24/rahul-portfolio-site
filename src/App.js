import React from "react";
import "./App.css";
import "../node_modules/animate.css/animate.css";
import CountUp from "react-countup";
import RahulImage from "./assets/images/Rahul Image 1.png";
import RahulImage2 from "./assets/images/rahul 3.png";
import { Navbar } from "./Navbar";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { AboutMe } from "./AboutMe";
import { WorkExperience } from "./WorkExperience";
import { AudioWork } from "./AudioWork";
import MyWork from "./MyWork";
import Contact from "./Contact";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState(false);

  function stickNavbar() {
    let windowHeight = window.scrollY;

    windowHeight > 1 ? setStickyClass(true) : setStickyClass(false);
  }
  // Scroll Functions
  const ScrollToHome = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let aboutSectionRef = useRef(null);
  let workExpSectionRef = useRef(null);
  let myWorkSectionRef = useRef(null);

  const ScrollToAbout = () => {
    setIsMenuOpen(false);
    window.scrollTo({
      top: aboutSectionRef.current.offsetTop - 120,
      behavior: "smooth",
    });
  };
  const scrollToWorkExp = () => {
    setIsMenuOpen(false);
    window.scrollTo({
      top: workExpSectionRef.current.offsetTop - 120,
      behavior: "smooth",
    });
  };
  const scrollToMyWork = () => {
    setIsMenuOpen(false);
    window.scrollTo({
      top: myWorkSectionRef.current.offsetTop - 120,
      behavior: "smooth",
    });
  };
  const scrollToCantactMe = () => {
    setIsMenuOpen(false);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);

  return (
    <>
      <div className="App">
        <div className="HomeDesignDiv"></div>
        <div className={`HomeDivTop ${stickyClass && `StickyNavbarColor`}`}>
          <div className="TopNavDiv">
            <h2 className="Logo-Text">RAHUL BANSAL </h2>
          </div>
          <div className="Nav">
            <button
              className="MenuButton"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <FiMenu />
            </button>
          </div>
          <div className={`NavigationBar ${!isMenuOpen && `VissibleMenu`}`}>
            <Navbar
              ScrollToHome={ScrollToHome}
              ScrollToAbout={ScrollToAbout}
              ScrollToWorkExp={scrollToWorkExp}
              ScrollToMyWork={scrollToMyWork}
              ScrollToCantactMe={scrollToCantactMe}
            />
          </div>
        </div>

        <div className="HomeDivMiddle">
          <div className="ForgroundText">
            <h2 className="animate__animated animate__rubberBand">
              Content <span>Writer.</span>
            </h2>
            <p>
              I can write what you can <span>feel</span>. You will feel what you
              will <span>read</span>
            </p>
          </div>
          <div className="HomeImage animate__animated animate__slideInRight animate__fast">
            <img src={RahulImage} alt="Here is the boy" />
          </div>
        </div>
        <div className="HomeDivBottom">
          <div className="HomeDesImage">
            <img src={RahulImage2} alt="Rahul Image Small" />
          </div>
          <div className="CounterDiv">
            <div className="counter 1">
              <CountUp
                className="CountNumber"
                end={3000}
                duration={4}
                prefix="+ "
              />
              <p>Writing Work</p>
            </div>
            <div className="counter 2">
              <CountUp className="CountNumber" end={200} prefix="+ " />
              <p>Stories</p>
            </div>

            <div className="counter 2">
              <CountUp
                className="CountNumber"
                end={1000}
                duration={3}
                prefix="+ "
              />
              <p>Social Media</p>
            </div>
            <div className="counter 4">
              <CountUp className="CountNumber" end={200} prefix="+ " />
              <p>Media Content</p>
            </div>
            <div className="counter 3">
              <CountUp
                className="CountNumber"
                duration={2}
                end={80}
                prefix="+ "
              />
              <p>Product Description</p>
            </div>
          </div>
        </div>

        <AboutMe AboutSectionRef={aboutSectionRef} />
        <WorkExperience WorkExpSectionRef={workExpSectionRef} />
        <MyWork MyWorkSectionRef={myWorkSectionRef} />
        <AudioWork />
        <Contact />
      </div>
    </>
  );
}

export default App;
