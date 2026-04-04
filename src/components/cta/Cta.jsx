import React from "react";
import "./cta.css";

const Cta = () => {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>Try ChatGPT Today</p>
        <h3>
          {" "}
          Explore how AI can help you learn, create, and solve problems more
          efficiently.{" "}
        </h3>
      </div>
      <div className="gpt3__cta-btn">
        <a
          href="https://chatgpt.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button">Get Started</button>
        </a>
      </div>
    </div>
  );
};

export default Cta;
