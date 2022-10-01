//Importing styles
import "./HomePage.css";
//Importing assets
import person from "../../assets/Headshot-wb.png";
// Importing hooks
import { useNavigate } from "react-router-dom";
//Importing components
import JumpUpText from "../../components/JumpUpText/JumpUpText";
//Importing video assets
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
          <a
            href="https://www.youtube.com/watch?v=QLBhWYlISgE&t=86s"
            target="blank"
          >
            <img className="capstone-img" src={thumbnail} width="100%" />
          </a>
        </div>
        <p>
          Capstone{" "}
          <a href="https://github.com/mbisovskyi/TFT-FullStack" target="blank">
            Repository
          </a>
        </p>
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
