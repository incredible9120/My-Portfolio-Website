import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
// import mock05 from '../assets/images/mock05.png';
// import mock06 from '../assets/images/mock06.png';
// import mock07 from '../assets/images/mock07.png';
// import mock08 from '../assets/images/mock08.png';
// import mock09 from '../assets/images/mock09.png';
// import mock10 from '../assets/images/mock10.png';
import "../assets/styles/Project.css";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://www.montopay.com/" target="_blank" rel="noreferrer">
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://www.montopay.com/" target="_blank" rel="noreferrer">
            <h2>MontoPay.com</h2>
          </a>
          <p>
            MontoPay: Transforming B2B Fintech with Seamless Invoicing Solutions
          </p>
        </div>
        <div className="project">
          <a
            href="https://MathFactLab.com"
            target="_blank"
            rel="northerner"
          >
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://MathFactLab.com"
            target="_blank"
            rel="noreferrer"
          >
            <h2>MathFactLab.com</h2>
          </a>
          <p>
          interactive online learning platform designed to revolutionize the way students master basic math facts
          </p>
        </div>
        <div className="project">
          <a href="https://PayRollEase.com" target="_blank" rel="noreferrer">
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://PayRollEase.com" target="_blank" rel="noreferrer">
            <h2>PayRollEase.com</h2>
          </a>
          <p>PayRollEase.com – Simplifying Payroll & Workforce Management</p>
        </div>
        <div className="project">
          <a
            href="https://github.com/ruvnet/agentic-voice"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/ruvnet/agentic-voice"
            target="_blank"
            rel="noreferrer"
          >
            <h2>AI Agentic Voice Platform</h2>
          </a>
          <p>
            AI Agentic Voice Platform: Revolutionizing Human-Machine Interaction
            with Natural Language Processing and Machine Learning.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
