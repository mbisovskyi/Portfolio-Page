//Importing styles
import "./HomePage.css";
//Importing assets
import person from "../../assets/Headshot-wb.png";
// Importing hooks
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
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
      </div>
      <img
        onClick={() => navigate("/about")}
        className="person-img"
        src={person}
        height="500px"
      />
    </div>
  );
};

export default HomePage;
