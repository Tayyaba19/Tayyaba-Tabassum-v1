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
          &nbsp;&nbsp;Led the enhancement of a pivotal project focused on generating Text and Excel (Crystal) reports to facilitate the settlement of transaction amounts across multiple banks.  <br />
          <br />
          <i className="fas fa-chevron-right"></i>
          &nbsp;&nbsp;Instrumental in developing innovative solutions for a fast and efficient report-generating system in .NET Core, with a robust MySQL database backend. Demonstrated expertise in problem-solving and optimizing project performance.
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
          &nbsp;&nbsp; Contributed significantly to the development of a blog management application by spearheading the frontend design using React.js.<br />          <br />
          <i class="fas fa-chevron-right"></i>
          &nbsp;&nbsp;Ensured an intuitive and user-friendly interface, enhancing the overall user experience for seamless navigation and content management.       
         <br /><br />
          <i class="fas fa-chevron-right"></i>
          &nbsp; &nbsp;Collaborated in designing REST APIs with Next.js, contributing to the establishment of a robust and efficient backend infrastructure for the blog management application.     </div>
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
          &nbsp;&nbsp; Provided invaluable guidance and support to students during Programming Fundamental (PF) lab sessions.
          <br />          <br />

          <i class="fas fa-chevron-right"></i>
          &nbsp;&nbsp;Conducted thorough reviews and assessments of students' lab exercises, offering explanations and guidance for correct solutions. 
          <br />          <br />

<i class="fas fa-chevron-right"></i>
&nbsp;&nbsp;Played a pivotal role in fostering a conducive learning environment, ensuring students received comprehensive assistance in grasping fundamental programming concepts.
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
    <h4>EXPERIENCE</h4>
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
      <h3 className="resume" >
        <a href="https://drive.google.com/file/d/1mpkntV5Rv5fN7uR593y4ZgXcJFWfXR69/view?usp=sharing" target="_blank" rel="noopener noreferrer">View full Resume</a>     
         <i class="fas fa-arrow-up fa-1x diagonal-icon"  ></i>
       </h3>

    </div>
  );
}

export default Experience;
