import "./AboutPage.css";
//PAGES
import JumpUpText from "../../components/JumpUpText/JumpUpText";
import AboutMeText from "../../components/AboutMeText/AboutMeText";

const AboutPage = () => {
  const textDisplayTicks = 43;
  const text = "About me";

  return (
    <div className="aboutpage-container">
      <JumpUpText text={text} ticks={textDisplayTicks} />
      <AboutMeText />
    </div>
  );
};

export default AboutPage;
