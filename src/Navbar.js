import React from "react";

export const Navbar = ({
  ScrollToHome,
  ScrollToAbout,
  ScrollToWorkExp,
  ScrollToMyWork,
  ScrollToCantactMe,
}) => {
  const NavContent = [
    { Navtext: "Home", NavLink: null, callFun: ScrollToHome },
    { Navtext: "About Me", NavLink: null, callFun: ScrollToAbout },
    { Navtext: "Work Experience ", NavLink: null, callFun: ScrollToWorkExp },
    { Navtext: "My Work", NavLink: null, callFun: ScrollToMyWork },
    { Navtext: "Contact Now", NavLink: null, callFun: ScrollToCantactMe },
  ];

  return (
    <>
      <div className="NavDiv">
        {NavContent.map((NavItem, index) => {
          return (
            <a key={index} className="NavOption" onClick={NavItem.callFun}>
              {NavItem.Navtext}
            </a>
          );
        })}
      </div>
    </>
  );
};
