import React from "react";
import "./Experience.css";

function Experience() {
  const experienceData = [
    {
      id: 1,
      date: "June 2023 - Present",
      jobTitle: "Software Engineer",
      company: "1LINK Pvt Ltd",
      companyUrl: "https://www.1link.net.pk/",
      description: (
        <div>
          Collaborated with a team to enhance a project focused on streamlining
          transaction settlements across multiple banks. Played a key role in
          developing innovative solutions to create an efficient
          report-generating system. Demonstrated strong problem-solving skills
          and contributed to improving project performance.
        </div>
      ),
      technologies: [".NET", "C#", "MySQL", "Angular"],
    },

    {
      id: 2,
      date: "June 2022 - Aug 2022",
      jobTitle: "Software Engineer Intern",
      company: "folio3",
      companyUrl: "https://folio3.com/",
      description: (
        <div>
          Played a significant role in developing a blog management application,
          focusing on frontend design with React.js. Ensured an intuitive
          interface for seamless navigation and content management, enhancing
          user experience.
           </div>
      ),
      technologies: ["React JS", "Next JS", "MySQL"],
    },
    // {
    //   id: 3,
    //   date: "Aug 2022 - Jan 2023",
    //   jobTitle: "Student Lab Assistant",
    //   company: "FAST University",
    //   companyUrl: "https://www.nu.edu.pk/",
    //   description: (
    //     <div>
    //       <i class="fas fa-chevron-right"></i>
    //       &nbsp;Provided invaluable guidance and support to students during
    //       Programming Fundamental (PF) lab sessions.
    //       <br />
    //       <i class="fas fa-chevron-right"></i>
    //       &nbsp;Conducted thorough reviews and assessments of students' lab
    //       exercises, offering explanations and guidance for correct solutions.
    //       <br />
    //       <i class="fas fa-chevron-right"></i>
    //       &nbsp;Played a pivotal role in fostering a conducive learning
    //       environment, ensuring students received comprehensive assistance in
    //       grasping fundamental programming concepts.
    //     </div>
    //   ),
    //   technologies: [" C++", "Data Structre", "MySQL", "LSTM", "Autoencode"],
    // },
  ];

  return (
    <div className="div-exp" id="experience">
      {/* <h1>Experience</h1> */}
      <h4>EXPERIENCE</h4>
      {experienceData.map((experience) => (
        <div key={experience.id} className="experience-container">
          <div className="date-column">
            <h5 className="date">{experience.date}</h5>
          </div>
          <div className="details-column">
            <div className="experience-details">
              <div className="header">
                <h5 className="job-title">{experience.jobTitle}</h5>
                &nbsp;·&nbsp;

                <h5 className="company">
                  <a
                    className="company"
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {experience.company}
                  </a>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg> */}
                </h5>
              </div>
              <p className="description">{experience.description}</p>
              <ul className="Exp-skills">
                {experience.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
      <h3 className="resume">
        <a
          href="https://drive.google.com/file/d/19OMwOclpRauZtoKWE3eQi17i_DPVIxTP/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          View full Résumé
        </a>
        <i class="fas fa-arrow-up fa-1x diagonal-icon"></i>
      </h3>
    </div>
  );
}

export default Experience;
