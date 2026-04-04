import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Continuous updates",
    text: "Regular improvements make AI systems more accurate, safe, and reliable for users.",
  },
  {
    title: "Smarter assistance",
    text: "ChatGPT understands user intent and provides helpful, relevant responses in real time.",
  },
  {
    title: "Clear communication",
    text: "It simplifies complex ideas into easy-to-understand explanations.",
  },
  {
    title: "Practical usefulness",
    text: "From writing to problem-solving, it supports a wide range of everyday tasks.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>
          Start using AI tools today to learn faster, create better ideas, and
          improve productivity in everyday life.
        </p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
