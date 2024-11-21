import React from 'react';
import './Home.css';
import pic2 from '../files/pic2.jpg'; // Adjust the path as needed

function Home() {
  return (
    <div className="home-container">
      {/* Background Shapes */}
      <div className="shape triangle"></div>
      <div className="shape slanted"></div>
      <div className="shape circle"></div>
      <div className="shape slanted-triangle"></div>
      <div className="shape rect"></div>

      <h1 className="welcome-text">Hello, I'm Aastha Sharma</h1>
      <div className="content-container">
        <img src={pic2} alt="Aastha" className="profile-picture" />
        <div className="about-me-box">
          <h2>About Me</h2>
          <p>
            I am a passionate individual with a deep interest in computer science and technology. 
            I enjoy creating innovative projects, solving complex problems, and collaborating with 
            others to learn and grow. My journey is fueled by curiosity and the desire to make an 
            impact in the world of tech.
          </p>
        </div>
      </div>
      <div className="info-section">
        <div className="info-box">
          <h3>Awards</h3>
          <ul>
            <li>Mock Trial Area Semi-Finalist</li>
            <li>Academic Excellence Scholar</li>
            <li>AP Scholar With Distinction</li>
          </ul>
        </div>
        <div className="info-box">
          <h3>Skills</h3>
          <ul>
            <li>Python</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
          </ul>
        </div>
        <div className="info-box">
          <h3>Education</h3>
          <ul>
            <li>Bachelor's in Computer Science @ UTD</li>
            <li>Centennial High School 2020-2024</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
