import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faPython,
  faBitcoin,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.css";

const labelsFirst = [
  "Node",
  "MongoDB",
  "Express",
  "React",
  "Vue",
  "Next",
  "TypeScript",
  "Python",
  "Django",
  "FastAPI",
  "SQL",
  "PostgreSQL",
];

const labelsSecond = [
  "Cryptography",
  "Solidity",
  "Ethereum",
  "Smart Contracts",
  "IPFS",
  "Web3",
  "Polygon",
  "Chainlink",
  "Truffle",
  "Hardhat",
];

const labelsThird = [
  "OpenAI",
  "Groq",
  "LangChain",
  "Qdrant",
  "Hugging Face",
  "LlamaIndex",
  "Streamlit",
  "Transformers",
  "Pinecone",
  "Haystack",
  "LangChain",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I've been working in web development for over the years -
              beginning as an intern and evolving through various roles to
              become a highly skilled both front-end and back-end developer.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faBitcoin} size="3x" />
            <h3>Blockchain Developer</h3>
            <p>
              I’m a blockchain developer specializing in smart contracts and
              dApps. I work with Solidity, Ethereum, and EVM-compatible chains.
              I’ve built DeFi apps, NFT platforms, and DAO tools. My focus is on
              clean, secure, and efficient code.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>GenAI & LLM</h3>
            <p>
              Stay relevant in the market by leveraging the latest AI models in
              your projects. I have professional experience building enterprise
              grade GenAI-enabled solutions to empower intelligent decision
              making.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
