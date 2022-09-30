import "./AboutMeText.css";
//HOOKS
import { useState } from "react";
//IMPORTS
import AboutMeVariables from "./AboutMeVariables.js";

const AboutMeText = () => {
  //STATE VARIABLES
  const [currentButtonText, setCurrentButtonText] = useState(
    AboutMeVariables.buttonTextOne
  );

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
    </div>
  );
};

export default AboutMeText;
