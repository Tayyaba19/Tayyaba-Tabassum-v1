import { useState } from "react";
import React from "react";
import "./Project.css";
import pro1 from "./images.png";
import als from "./ALS.png";

const projectdata = [
  {
    id: 1,
    Title: "Adaptive Learning System",
    image: als,
    description: (
      <div>
        {/* <i className="fas fa-chevron-right"></i> */}
        {/* &nbsp; */}
        Led the frontend development of an AI-driven adaptive learning system,
        taking charge of designing an engaging and user-friendly interface for
        the Application. <br />
        {/* <i className="fas fa-chevron-right"></i> */}
        {/* &nbsp; */}
        Applied collaborative-filtering models to enhance user engagement,
        leveraging recommendation algorithms to suggest tailored learning
        re-sources based on the interests of similar users, thus personalizing
        the learning journey.
      </div>
    ),
    technologies: ["React JS", "Next JS", "MySQL", "LSTM", "Autoencode"],
  },
  // {
  //   id: 2,
  //   Title: "DUMMY PROJECT",
  //   image : pro1,
  //   description: ".",
  // technologies:["React JS", "Next JS", "MySQL","LSTM", "Autoencode"],

  // },
  // {
  //   id: 3,
  //   Title: "Adaptive Learning System",
  //   image : pro1,
  //   description: "Developed a dynamic web-based application using React JS, Next JS, and SQL. Integrate AI and ML algorithms, including LSTM and Auto-encoder via Python, to elevate the learning experience.",
  // technologies:["React JS", "Next JS", "MySQL","LSTM", "Autoencode"],
  // }
];
function Project() {
  return (
    <div className="project-container" id="project">
      <h1 className="pro">Feature Projects</h1>
      <div>
        <h4>PROJECT</h4>
        {projectdata.map((project) => (
          <div key={project.id} className="project-details">
            <h2>{project.Title}</h2>
            <p className="details">{project.description}</p>
            <ul className="project-skills">
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="giticon">
              <div className="tooltip">
                <a
                  href="https://github.com/Tayyaba19/Adaptive-Learning-System"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                  <span className="tooltiptext">see the code</span>
                </a>
              </div>
              <div className="tooltip">
                <i className="fas fa-heart"></i>
                <span className="tooltiptext">under development</span>
              </div>
              <div className="tooltip">
                <i className="fas fa-comment"></i>
                <span className="tooltiptext">under development</span>
              </div>
              {/* <div className="tooltip">
                  <i className="fas fa-link"></i>
                  <span className="tooltiptext">see the project</span>
                </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Project;
