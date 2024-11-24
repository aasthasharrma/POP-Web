import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <div className="content-box">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p>
            Welcome to my projects page! Here, you'll find a collection of work
            showcasing my skills in public speaking, data analysis, and collaboration, as well as my commitment to creativity and continuous growth.
          </p>
        </div>
        <div className="project-list">
          {/* Project 1 */}
          <div className="project-item">
            <div className="project-image">
            <img src={require("../files/walking.png")} alt="About Me - Section 1" />

            </div>
            <div className="project-details">
              <h2>01</h2>
              <h3>Data Analysis</h3>
              <p>
                In this project, I tracked the average steps and distance i walked in a 6 week period. 
                After that I analyzed my data through Apple Fitness and created a chart accuratley depciting the results in the 6 week period. 

              </p>
              <Link to="/projects/project1" className="read-more-button">
                Read More &rarr;
              </Link>
            </div>
          </div>
          <hr className="section-divider" />


          {/* Project 2 */}
          <div className="project-item">
            <div className="project-image">
            <img src={require("../files/email.jpeg")} alt="About Me - Section 1" />
            </div>
            <div className="project-details">
              <h2>02</h2>
              <h3>Email Analysis</h3>
              <p>
                The incentive of this project was to go through a sample email from a manager at a company. 
                Our job was to give constructive critisism to this email to enhance the tone and effectiveness. 
              </p>
              <Link to="/projects/project2" className="read-more-button">
                Read More &rarr;
              </Link>
            </div>
          </div>
          <hr className="section-divider" />


          {/* Project 3 */}
          <div className="project-item">
            <div className="project-image">
            <img src={require("../files/group.jpeg")} alt="About Me - Section 1" />
            </div>
            <div className="project-details">
              <h2>03</h2>
              <h3>Group Presentation</h3>
              <p>
                In this group project, we were given a scenario where we were presenting to upcoming interns about a specific concern in the workplace. 
              </p>
              <Link to="/projects/project3" className="read-more-button">
                Read More &rarr;
              </Link>
            </div>
          </div>
          <hr className="section-divider" />


          {/* Project 4 */}
          <div className="project-item">
            <div className="project-image">
            <img src={require("../files/peer.png")} alt="About Me - Section 1" />
            </div>
            <div className="project-details">
              <h2>04</h2>
              <h3>Peer Feedback</h3>
              <p>
               During this project, I was able to get valuable insights about my presentation skills, as well as advice to refine my work through contructive critisism. 
              </p>
              <Link to="/projects/project4" className="read-more-button">
                Read More &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
