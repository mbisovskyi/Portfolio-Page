import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.css";
import background from "../../assets/desk.jpg";
import pen from "../../assets/pen.png";

const HomePage = () => {
  return (
    <div className="homepage-wrap">
      <img className="background-img" src={background} alt="background" />
      <img className="pen-img" src={pen} alt="pen" height="350px" />
      <div className="left-container">
        <NavBar />
      </div>
      <div className="right-container"></div>
    </div>
  );
};

export default HomePage;
