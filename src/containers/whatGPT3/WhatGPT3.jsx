import React from "react";
import { Feature } from "../../components/";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is Open AI"
          text="ChatGPT is an artificial intelligence system designed to understand and generate human-like text. It can answer questions, explain ideas, assist with writing, and hold conversations. Built by OpenAI, it learns from vast data to provide helpful, context-aware responses across many topics."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="AI systems designed to simulate human conversation. They help users get answers, complete tasks, and access information quickly and efficiently."
        />
        <Feature
          title="Knowledgebase"
          text="An organized system of information that allows ChatGPT to retrieve, explain, and summarize knowledge in a clear and useful way for users."
        />
        <Feature
          title="Education"
          text="ChatGPT is trained using large amounts of text data and improved through feedback, allowing it to better understand language, context, and user needs over time."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
