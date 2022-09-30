import "./JumpUpText.css";
import { useEffect } from "react";

const JumpUpText = ({ text, ticks }) => {
  useEffect(() => {
    effectedText();
  }, []);

  const effectedText = () => {
    text = document.querySelector(".effected-text");
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";

    for (let i = 0; i < splitText.length; i++) {
      text.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, ticks);

    function onTick() {
      const span = text.querySelectorAll("span")[char];
      span.classList.add("fade");
      char++;
      if (char === splitText.length) {
        complete();
        return;
      }
    }

    function complete() {
      clearInterval(timer);
      timer = null;
    }
  };

  return <div className="effected-text">{text}</div>;
};

export default JumpUpText;
