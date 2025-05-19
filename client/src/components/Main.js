import React from "react";
import "../assets/styles/Main.css";
import RotatingText from "./RotatingText"; // Adjust the import path as necessary
import myPhoto from "../assets/images/portrait.png";
function Main() {
  const messages = [
    "Imagination is more important than knowledge.",
    "The only way to do great work is to love what you do.",
    "The best way to predict the future is to create it.",
  ];
  const Portrait = ({ src, alt = "Profile photo" }) => (
    <img
      src={src}
      alt={alt}
    //   className="fixed bottom-4 right-4 w-[8vw] h-[6vw] max-w-[100px] max-h-[100px] object-cover rounded-full shadow-lg border z-50"
    className="fixed bottom-0 right-0"  
    style={{width: "25vw", height: "25vw", objectFit: "cover", borderRadius: "50%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", zIndex: 50}}
    />
  );
  return (
    <div className="container" id="home">
      <div className="about-section">
        <div className="content">
          <div className="mt-10">
            <RotatingText sentences={messages} interval={4000} />
          </div>
          <h2>I'm Claude Morneault</h2>
          <p>Welcome to My World!!!</p>
        </div>
        <Portrait src={myPhoto} alt="Claude Morneault" />
      </div>
    </div>
  );
}

export default Main;
