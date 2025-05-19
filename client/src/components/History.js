import React from "react";
import { FaRocket } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/History.css";

function History() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="August 2023 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full-Stack Web Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Accroid Inc at Bentonville, AR
            </h4>
            <p>
              Full-stack Web Development, GenAI/LLM, Project Management,
              Blockchain Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2019 - July 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full-Stack Web Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Delmar International Inc at Ontario, Canada
            </h4>
            <p>
              Frontend Development, Backend Development, User Experience, Team
              Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="November 2016 - May 2019"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Front-End & Database Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              NCH at Las Vegas, NV
            </h4>
            <p>Front-End Development, Database Management, User Experience</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2010 - October 2016"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Front-end Developer & Web Designer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Largeton Group at Houston, TX
            </h4>
            <p>
              Designed and developed modern, responsive websites and
              applications, integrating front-end technologies for a seamless
              user experience.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2008 - April 2010"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sunbird Software, Piscataway, NJ
            </h4>
            <p>
              Created responsive layouts and interactive UI elements using HTML,
              CSS, JavaScript, and jQuery
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2007 - July 2008"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Freelance Web Designer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Freelance Platform or Self-Employed
            </h4>
            <p>
              Delivered custom website and app designs for various clients
              across different industries.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default History;
