import React, {useEffect} from "react";
import {
  Main,
  // Timeline,
  Expertise,
  // Project,
  // Contact,
  NavBar,
  // Footer,
  FadeIn
} from "./components";
import './index.css';

function App() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className = "main-container">
        <NavBar/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            {/* <Timeline/>
            <Project/>
            <Contact/> */}
        </FadeIn>
        {/* <Footer /> */}
    </div>
    );
}

export default App;