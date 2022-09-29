import "./AboutMeText.css";
//HOOKS
import { useState } from "react";
//IMPORTS
import AboutMeVariables from "./AboutMeVariables.js";

const AboutMeText = () => {
  //STATE VARIABLES
  const [currentText, setCurrentText] = useState(AboutMeVariables.textOne);
  const [currentButtonText, setCurrentButtonText] = useState(
    AboutMeVariables.buttonTextOne
  );

  //FUNCTIONS
  function handleClick() {
    if (currentText === AboutMeVariables.textOne) {
      setCurrentText(AboutMeVariables.textTwo);
      setCurrentButtonText(AboutMeVariables.buttonTextTwo);
    } else {
      setCurrentText(AboutMeVariables.textOne);
      setCurrentButtonText(AboutMeVariables.buttonTextOne);
    }
  }

  //RENDER THIS!
  return (
    <div className="about-me-text-container">
      <p className="text">{currentText}</p>
      <button className="btn" onClick={handleClick}>
        {currentButtonText}
      </button>
    </div>
  );
};

export default AboutMeText;
