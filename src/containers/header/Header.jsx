import React from "react";
import "./header.css";
import people from "../../images/people.png";
import ai from "../../images/ai.png";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let’s Build Something Amazing with ChatGPT by OpenAI
        </h1>
        <p>
          ChatGPT is an AI system that helps you write, learn, create, and solve
          problems through natural conversation. It turns your questions into
          clear, useful answers instantly.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>
            1{getRandomInt(999) /*I will get to the back-end of this one day*/}{" "}
            people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
