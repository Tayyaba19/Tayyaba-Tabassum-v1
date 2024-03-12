import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import React from "react";
import About from "../About/About";
import Project from "../Project/Project";
import Experience from "../Experience/Experience";
import { Link, Element } from 'react-scroll';
function Home() {
  return (
    <div>
    <div className="home-div">
      <div className="right-side">
        <h1>Tayyaba Tabassum</h1>
        <h2>Software Engineer</h2>
        <p>
          I build exceptional and accessible digital experiences for the web.
        </p>
        <div className="div_list">
        <ul className="list-items">
            <hr className="link-item" />
            <li>
               <Link to="about" smooth={true} duration={300}>
               ABOUT
            </Link>
              </li>
            <hr className="link-item" />
            <li>
               <Link to="experience" smooth={true} duration={300}>
               EXPERIENCE
            </Link>
              </li>         
            <hr className="link-item" />
            <li>
               <Link to="project" smooth={true} duration={500}>
               PROJECTS
            </Link>
              </li>
        </ul>
        </div>

        <div className="social-icons">
          {/* <p className="findme"> find me on</p> */}
          <ul>
            <li><a href="https://pk.linkedin.com/in/tayyaba-tabassum-65117b199" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="ONCLICK"/></a></li>
            <li><a href=""><FontAwesomeIcon icon={faGithub}  size="2x" className="ONCLICK" /></a></li>
            <li><a href=""><FontAwesomeIcon icon={faMedium}   size="2x" className="ONCLICK" /></a></li>
          </ul>
        </div>
      </div>
    </div>
   <div className="about-div">   
     <About/>
    </div>
    <div className="expreience-div">
    <Experience/>
    </div>  
    {/* <div className="project-div">
    </div>   */}

    </div>
  );
}

export default Home;
