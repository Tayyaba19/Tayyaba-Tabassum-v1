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
        Developed an e-learning platform using <span>React.js</span> and{" "}
        <span>Next.js</span>, integrating{" "}
        <span>user-based collaborative filtering</span> for personalized content
        recommendations and <span>decision trees</span> for adaptive testing.
        Utilized machine learning algorithm <span>LSTM</span> to assess and track
        user knowledge levels.
        <br />
      </div>
    ),
    githubLink: "https://github.com/Tayyaba19/Adaptive-Learning-System",
    projectLink: "<Your project link goes here>",
  },
  {
    id: 2,
    Title: "E-Commerce Shopping Hub",
    image: pro1,
    description: (
      <div>
        Designed and developed a user-friendly and efficient web-based E-commerce
        application using <span>React.js</span> and <span>Bootstrap</span> and
        <span> Redux-Toolkit</span>. Added a shopping cart feature for users to
        store and manage products for future purchase.
        <br />
      </div>
    ),
    githubLink: "https://github.com/Tayyaba19/E-Commerce-Shopping-Hub",
    projectLink: "<Your project link goes here>",
  },
  {
    id: 3,
    Title: "Blog Buzz",
    image: pro1,
    description: (
      <div>
        A blogging platform facilitating blog posting and viewing. Enabled
        interactive functionalities such as liking, sharing, and commenting on
        blogs. Leveraged <span>React.js</span> for frontend development,{" "}
        <span>Next.js</span> for backend operations, and <span>SQL</span> for data
        storage.
        <br />
      </div>
    ),
    githubLink: "https://github.com/Tayyaba19/BlogBuzz",
    projectLink: "https://tayyaba19.github.io/BlogBuzz/",
  },
];

function Project() {
  return (
    <div className="project-container" id="project">
      <div>
        <h4>PROJECTS</h4>
        {projectdata.map((project) => (
  <div key={project.id} className="project-details">
    <div className="otherdetails">
      <div className="header">
        <h2>
          {project.Title}
          <i class="fas fa-arrow-up fa-1x diagonal-icon"></i>
        </h2>
        <h3>Feature project</h3>
      </div>
      <p className="details">{project.description}</p>
      <div className="giticon">
        <div className="tooltip">
          <p className="iconh3">
            View code
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </p>
        </div>
        <div className="tooltip">
          <p className="iconh3">
            See project
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-arrow-up-right-from-square" />{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
    {/* <div className="imagediv">
          <img className="image" src={project.image} alt="" />
        </div> */}
  </div>
))}

      </div>
    </div>
  );
}
export default Project;
