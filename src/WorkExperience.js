import React from "react";
import "./Styles/WorkEperience.css";
import WorkCompanies from "./Data/WorkCompany.json";
import { Fade, Bounce } from "react-reveal";

export const WorkExperience = ({ WorkExpSectionRef }) => {
  return (
    <div ref={WorkExpSectionRef}>
      <Bounce right>
        <h2>Work Eperience</h2>
      </Bounce>
      <div className="container">
        {WorkCompanies &&
          WorkCompanies.map((company) => {
            return (
              <Fade bottom key={company.id}>
                <div className="company">
                  <img src={company.image} alt="Image" />
                  <h3>{company.company}</h3>
                  <p>{company.exp}</p>
                </div>
              </Fade>
            );
          })}
      </div>
    </div>
  );
};
