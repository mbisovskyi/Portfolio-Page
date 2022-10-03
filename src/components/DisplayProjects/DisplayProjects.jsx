import "./DisplayProjects.css";
//Importing projects data
import projectsData from "./projectsData";
//Importing Hooks
import { useState } from "react";

const DisplayProjects = () => {
  //Variables
  const [projectIndex, setProjectIndex] = useState(0);
  const projectsQuantity = projectsData.length;

  //Functions
  function handleClick() {
    //Variable
    const projectContainer = document.querySelector(".project-container");

    //Functionality
    projectContainer.classList.add("project-slide-down");
    setTimeout(() => {
      if (projectIndex + 1 === projectsQuantity) {
        setProjectIndex(0);
      } else {
        setProjectIndex(projectIndex + 1);
      }
      projectContainer.classList.remove("project-slide-down");
    }, 700);
  }

  return (
    <div className="projects-wrap">
      <div className="next-project-btn-container">
        <button className="next-project-btn" onClick={handleClick}>
          Next Project
        </button>
      </div>
      <div className="project-container">
        <img
          src={projectsData[projectIndex].image}
          alt="Music Library"
          width="50%"
        />
        <a
          className="my-repos-link"
          href="https://github.com/mbisovskyi?tab=repositories"
          target="blank"
        >
          My Repositories
        </a>
      </div>
      <div className="projects-links-container">
        <a href={projectsData[projectIndex].backendLink} target="blank">
          Backend
        </a>
        <span className="project-name">{projectsData[projectIndex].name}</span>
        <a href={projectsData[projectIndex].frontendLink} target="blank">
          Frontend
        </a>
      </div>
    </div>
  );
};

export default DisplayProjects;
