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
    description:
      "Developed a dynamic web-based application using React JS, Next JS, and SQL. Integrate AI and ML algorithms, including LSTM and Auto-encoder via Python, to elevate the learning experience.",
    technologies: ["React JS", "Next JS", "MySQL", "LSTM", "Autoencode"],
  },
  // {
  //   id: 2,
  //   Title: "Adaptive Learning System",
  //   image : pro1,
  //   description: "Developed a dynamic web-based application using React JS, Next JS, and SQL. Integrate AI and ML algorithms, including LSTM and Auto-encoder via Python, to elevate the learning experience.",
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
  const [showTooltip, setShowTooltip] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };
  return (
    <div className="project-container" id="project">
      <h1 className="pro">Feature Projects</h1>
      <div>
        <h4>PROJECT</h4>
        {projectdata.map((project) => (
          <div key={project.id} className="project-details">
            <div className="column">
              <img src={project.image} alt={project.Title} />
            </div>
            <div className="column">
              <h2>{project.Title}</h2>
              <p className="details">{project.description}</p>
              <ul className="skills">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="giticon">
                <div className="tooltip">
                  <a href="https://github.com/Tayyaba19/Adaptive-Learning-System"  target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                    <span className="tooltiptext">Find the code</span>
                  </a>
                </div>
                  <div className="tooltip">
                  <i className="fas fa-heart"></i>
                {/* <span className="tooltiptext">find the code</span> */}
              </div>
                <div className="tooltip">
                  <i className="fas fa-comment"></i>
                  <span className="tooltiptext">feedback</span>
                </div>
                  {/* <div className="tooltip">
                  <i className="fas fa-link"></i>
                  <span className="tooltiptext">see the project</span>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Project;
