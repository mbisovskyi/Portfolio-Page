//Importing styles
import "./HomePage.css";
//Importing assets
import person from "../../assets/Headshot-wb.png";
// Importing hooks
import { useNavigate } from "react-router-dom";
//Importing components
import JumpUpText from "../../components/JumpUpText/JumpUpText";
//Importing video assets
import video from "../../assets/M.Bisovskyi CVP.mp4";
import thumbnail from "../../assets/capstone-image.png";

const HomePage = () => {
  const navigate = useNavigate();
  const textDisplayTicks = 18;
  const greeting = "Welcome to my portfolio web site!";

  return (
    <div className="home-page-wrap">
      <div className="left-text-container">
        <JumpUpText text={greeting} ticks={textDisplayTicks} />
        <div className="capstone-video-container">
          <img src={thumbnail} width="100%" />
        </div>
        <p>Capstone Project</p>
      </div>
      <div className="person-container">
        <div className="person-name-div">
          <span onClick={() => navigate("/about")} className="name name-hover">
            Mykola Bisovskyi
          </span>
        </div>
        <div className="person-title-div">
          <span
            onClick={() => navigate("/about")}
            className="title title-hover"
          >
            Full Stack Software Developer
          </span>
        </div>
        <img
          onClick={() => navigate("/about")}
          className="person-img"
          src={person}
          height="500px"
        />
      </div>
    </div>
  );
};

export default HomePage;
