import React from "react";
import "./Home.css";
import pic2 from "../files/pic2.jpg";

function Home() {
  return (
    <div className="home-container">
      <div className="content-box animate">
        {/* Left Side: Text Content */}
        <div className="intro">
          <p className="greeting">Hello, it's Me</p>
          <h1>Aastha Sharma</h1>
          <h2>And I'm a Full Stack Developer</h2>
          <p>A Computer Science student at the University of Texas at Dallas</p>
          <div className="social-links">
            <a href="https://github.com/aasthasharrma" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/aastha-sharma-21377b278/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:aasthatx@gmail.com" target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </div>
          <div className="Watch For More">
            <a
              href="https://youtube.com/shorts/XSX4CPaEWgI" // Replace with the actual link
              target="_blank"
              rel="noopener noreferrer"
              className="download-cv-button"
            >
              Watch
            </a>
          </div>
        </div>

        {/* Right Side: Circular Profile Picture */}
        <div className="profile-picture">
          <div className="neon-circle">
            <img src={pic2} alt="Your Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
