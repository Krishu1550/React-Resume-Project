import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2017 - Aug 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Vel Tech HighTech Dr.Rangarajan Dr.Sakunthala Engineering College, Chennai, India
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2021 - Mar 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">

            Assistant Data Analyst - ZEN3 INFOSOLUTIONS
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote
          </h4>
          <p>Developed the Tableau dashboard for 3 projects.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sep 2021 - Nov 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">

            Front-end developer Intern - LEARNOVATE ECOMMERCE
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote
          </h4>
          <p>
            Helped the team launch 1 website by working  in the front
            end.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ESIGELEC : ÉCOLE D'INGÉNIEURS-ES GÉNÉRALISTES, Rouen, France
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Master's Degree
          </h4>

          <p> Software Engineering and Digital Transformation</p>
        </VerticalTimelineElement>


      </VerticalTimeline>
    </div>
  );
}

export default Experience;
