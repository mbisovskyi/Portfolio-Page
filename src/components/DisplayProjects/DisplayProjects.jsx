import "./DisplayProjects.css";
//Importing projects data
import projectsData from "./projectsData";
//Importing Hooks
import { useState } from "react";

const DisplayProjects = () => {
  const [projectName, setProjectName] = useState(
    projectsData.musicLibrary.name
  );
  const [backendLink, setBackendLink] = useState(
    projectsData.musicLibrary.backendLink
  );
  const [frontendLink, setFrontendLink] = useState(
    projectsData.musicLibrary.frontendLink
  );
  const [projectImage, setProjectImage] = useState(
    projectsData.musicLibrary.image
  );

  return (
    <div>
      <div className="next-project-btn-container">
        <button className="next-project-btn">Next Project</button>
      </div>
      <div className="project-container">
        <img src={projectImage} alt="Music Library" width="50%" />
        <span>{projectName}</span>
      </div>
      <div className="projects-links-container">
        <a href={backendLink} target="blank">
          Backend
        </a>
        <a href={frontendLink} target="blank">
          Frontend
        </a>
      </div>
    </div>
  );
};

export default DisplayProjects;
