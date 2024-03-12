import React, { useState } from "react";
import "./Experience.css";

function Experience() {
  const experienceData = [
    // {
    //   id: 1,
    //   date: "March 2024 - Present",
    //   jobTitle: "Software Engineer",
    //   company: "Wavetec",
    //   description: (
    //     <div>
    //       <i class="fas fa-chevron-right"></i>
    //       &nbsp;&nbsp;Remittance Program (SDRP), optimizing the monitoring of payment
    //       routing from international sources to Pakistan.
    //       <br />
    //       <br />
    //       <i class="fas fa-chevron-right"></i>
    //       &nbsp;&nbsp;Responsible for enhancement of a project to generate Text and Excel
    //       (Crystal) reports for settlement of transaction amount across multiple
    //       banks.
    //     </div>
    //   ),
    // },
    {
      id: 2,
      date: "June 2023 - Feb 2024",
      jobTitle: "Software Engineer",
      company: "1LINK Pvt Ltd",
      description: (
        <div>
          <i className="fas fa-chevron-right"></i>
          &nbsp;&nbsp;Developed modules using .NET Core and Angular for the Sohni Dharti
          Remittance Program (SDRP), optimizing the monitoring of payment
          routing from international sources to Pakistan.
          <br />
          <br />
          <i className="fas fa-chevron-right"></i>
          &nbsp;&nbsp;Responsible for enhancement of a project to generate Text and Excel
          (Crystal) reports for settlement of transaction amount across multiple
          banks.
        </div>
      ),
    },

    {
      id: 3,
      date: "June - August 2022",
      jobTitle: "Software Engineer Intern",
      company: "folio3",
      description: (
        <div>
          <i class="fas fa-chevron-right"></i>
          &nbsp;&nbsp; Developed the frontend of a blog management application using
          React.js, ensuring an intuitive and user-friendly interface for
          seamless navigation and content management.
          <br />          <br />

          <i class="fas fa-chevron-right"></i>
          &nbsp; &nbsp;Developed the frontend of a blog management application using
          React.js, ensuring an intuitive and user-friendly interface for
          seamless navigation and content management.{" "}
        </div>
      ),
    },
    {
      id: 4,
      date: "August 2022 - January 2023",
      jobTitle: "Student Lab Assistant",
      company: "FAST University",
      description: (
        <div>
          <i class="fas fa-chevron-right"></i>
          &nbsp;&nbsp; Provided guidance and support to students during the Programming
          Fundamental (PF) lab sessions.
          <br />          <br />

          <i class="fas fa-chevron-right"></i>
          &nbsp;&nbsp;Review and assess students' lab exercises, offering
          explanations and guidance for correct solutions as required.
        </div>
      ),
    },
  ];
  const [selectedExperience, setSelectedExperience] = useState(experienceData[0]);
  const handleExperienceClick = (experience) => {
    console.log('Clicked:', experience);
    setSelectedExperience(experience);
  };
  return (
    <div className="div-exp" id="experience">
      <h1 className="h1-class">Where I've Worked</h1>
      {/* <hr /> */}
      <div className="experience-container">
      <div className="company-list">
      {experienceData.map((experience) => (
        <div
          key={experience.id}
          className={`company-item ${
            selectedExperience.id === experience.id ? "selected" : ""
          }`}
          onClick={() => handleExperienceClick(experience)}
        >
          <div className="vertical-line"></div>
          {experience.company}
        </div>
      ))}
    </div>
        <div className="experience-details">
          {selectedExperience ? (
            <div className="experience-card">
              <div className="header">
                <h5 className="job-title">{selectedExperience.jobTitle}</h5>
                <h5 className="company"> @{selectedExperience.company}</h5>
              </div>
              <h5 className="date">{selectedExperience.date}</h5>
              <p className="description">{selectedExperience.description}</p>
              {/* <div className="skills">
              {selectedExperience.skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div> */}
            </div>
          ) : (
            <p>Select a company to view details</p>
          )}
        </div>
      </div>
      <h3 className="resume" ><a href="https://drive.google.com/document/your_document_id_here">View full Resume</a></h3>
<i class="fa fa-arrow-up-left custom-icon"></i>

    </div>
  );
}

export default Experience;
