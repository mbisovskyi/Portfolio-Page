import "./AboutPage.css";
//PAGES
import JumpUpText from "../../components/JumpUpText/JumpUpText";
import AboutMeText from "../../components/AboutMeText/AboutMeText";

const AboutPage = () => {
  const text = "About me";

  return (
    <div className="aboutpage-container">
      <JumpUpText text={text} />
      <AboutMeText />
    </div>
  );
};

export default AboutPage;
