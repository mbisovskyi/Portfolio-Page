import "./AboutMeText.css";
//HOOKS
import { useState, useEffect } from "react";
//IMPORTS
import AboutMeVariables from "./AboutMeVariables.js";

const AboutMeText = () => {
  //STATE VARIABLES
  const [currentButtonText, setCurrentButtonText] = useState(
    AboutMeVariables.buttonTextOne
  );

  useEffect(() => {
    const modalContainer = document.querySelector(".modal-skills-container");
    if (modalContainer.style.display === "block") {
      modalContainer.style.display = "none";
    } else {
      modalContainer.style.display = "block";
    }
    console.log(modalContainer);
  }, [currentButtonText]);

  //FUNCTIONS
  function handleClick() {
    if (currentButtonText === AboutMeVariables.buttonTextOne) {
      setCurrentButtonText(AboutMeVariables.buttonTextTwo);
    } else {
      setCurrentButtonText(AboutMeVariables.buttonTextOne);
    }
  }

  //RENDER THIS!
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        {currentButtonText}
      </button>
      <div className="about-me-text-container">
        {AboutMeVariables.textsArray.map((text, index) => {
          return (
            <div key={index}>
              <p className="texts">{text}</p>
            </div>
          );
        })}
      </div>
      <div className="modal-skills-container">
        <div className="skills-content">
          <p className="skills-paragraph">
            Languages:{" "}
            {AboutMeVariables.languageSkills.map((language, index) => {
              return (
                <span key={index} className="skills-span">
                  {language};{" "}
                </span>
              );
            })}
          </p>
          <p className="skills-paragraph">
            Frameworks:{" "}
            {AboutMeVariables.frameworkSkills.map((framework, index) => {
              return (
                <span key={index} className="skills-span">
                  {framework};{" "}
                </span>
              );
            })}
          </p>
          <p className="skills-paragraph">
            Technologies:{" "}
            {AboutMeVariables.technologySkills.map((technology, index) => {
              return (
                <span key={index} className="skills-span">
                  {technology};{" "}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeText;
