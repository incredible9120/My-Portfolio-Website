import React from "react";
import '../assets/styles/Main.css';
import RotatingText from "./RotatingText"; // Adjust the import path as necessary
function Main() {
    const messages = [
        "Imagination is more important than knowledge.",
        "The only way to do great work is to love what you do.",
        "The best way to predict the future is to create it."
    ];
    return (
        <div className="container">
            <div className="about-section">
                <div className="content">
                    <div className="mt-10">
                        <RotatingText sentences={messages} interval={4000} />
                    </div>
                    <h2>I'm Claude Morneault</h2>
                    <p>Welcome to My World!!!</p>
                </div>
            </div>
        </div>
    );
}

export default Main;