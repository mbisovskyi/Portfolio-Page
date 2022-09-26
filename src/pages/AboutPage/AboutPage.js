import "./AboutPage.css";
import JumpUpText from "../../components/JumpUpText/JumpUpText";

const AboutPage = () => {
  const text = "About me";

  return (
    <div className="aboutpage-wrap">
      <JumpUpText text={text} />
    </div>
  );
};

export default AboutPage;
