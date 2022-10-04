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
  const greeting = "Welcome to my portfolio website!";

  return (
    <div className="home-page-wrap">
      <div className="greeting-text-container">
        <JumpUpText text={greeting} ticks={textDisplayTicks} />
      </div>
      <div className="homepage-content-container">
        <div className="capstone-video-container">
          <div className="slide-right">
            <p>
              <span className="capstone-title">Capstone </span>
            </p>
            <a
              className="text30px-hover"
              href="https://github.com/mbisovskyi/TFT-FullStack"
              target="blank"
            >
              Repository
            </a>
          </div>
          <a
            href="https://www.youtube.com/watch?v=QLBhWYlISgE&t=86s"
            target="blank"
          >
            <img className="black-hover" src={thumbnail} width="45%" />
          </a>
        </div>
        <div className="person-container">
          <div className="slide-left ">
            <div className="name">
              <span
                className="text30px-hover"
                onClick={() => navigate("/about")}
              >
                Mykola Bisovskyi
              </span>
            </div>
            <div className="title">
              <span
                className="text30px-hover"
                onClick={() => navigate("/about")}
              >
                Full Stack Software Developer
              </span>
            </div>
          </div>
          <img
            className="black-hover slide-up"
            onClick={() => navigate("/about")}
            src={person}
            width="485px"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
