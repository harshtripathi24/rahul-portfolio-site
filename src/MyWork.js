import React from "react";
import works from "./Data/MyWorkData";
import "./Styles/MyWork.css";
import { useState } from "react";
import { Slide } from "react-reveal";
import Jump from "react-reveal/Jump";

const allCategories = [...new Set(works.map((work) => work.category))];

console.log(allCategories);

const MyWork = ({ MyWorkSectionRef }) => {
  const [renderWorks, setRenderWorks] = useState(
    works.filter((work) => work.category === "Social Media")
  );
  const [categories, setCategories] = useState(allCategories);
  const [currentCatogry, setCurrentCategory] = useState("Social Media");

  const filterWorks = (category) => {
    const newWorks = works.filter((work) => work.category === category);
    setRenderWorks(newWorks);
    setCurrentCategory(category);
    console.log("button Pressed");
    // console.log(newWorks);
  };

  return (
    <div className="MyWorkDiv" ref={MyWorkSectionRef}>
      <Slide right>
        <h2>My Work</h2>
      </Slide>

      <div className="CategoriesNav">
        {categories.map((category, index) => {
          return (
            <Jump>
              <button
                type="button"
                key={index}
                className={`NavButton ${currentCatogry === category &&
                  `activeButton`} `}
                onClick={() => filterWorks(category)}
              >
                {category}
              </button>
            </Jump>
          );
        })}
      </div>
      <div className="WorkCategory">
        {renderWorks.map((work) => {
          console.log(renderWorks);
          return (
            <Slide key={work.id} bottom>
              <img src={work.img} alt={work.id} />;
            </Slide>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
