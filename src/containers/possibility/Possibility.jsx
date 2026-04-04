import React from "react";
import "./possibility.css";
import possibilityImage from "../../images/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Start Exploring with ChatGPT Today</h4>
        <h1 className="gradient__text">
          The Possibilities are beyond your immagination
        </h1>
        <p>
          Discover how AI can help you write, learn, and solve problems more
          efficiently. Turn ideas into answers and complete tasks faster with
          smart, reliable assistance.
        </p>
        <h4>Begin Your AI Experience Today</h4>
      </div>
    </div>
  );
};

export default Possibility;
