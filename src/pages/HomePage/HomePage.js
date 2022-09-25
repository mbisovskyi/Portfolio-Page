//Importing styles
import "./HomePage.css";
//Importing assets
import person from "../../assets/Headshot-wb.png";

const HomePage = () => {
  return (
    <div>
      <div className="person-signature-container">
        <p className="person-signature-text">Mykola Bisovskyi</p>
        <p className="person-title-text">Full Stack Software Developer</p>
      </div>
      <img className="person-img" src={person} height="500px" />
    </div>
  );
};

export default HomePage;
