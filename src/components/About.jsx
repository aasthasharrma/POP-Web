import React from "react";
import "./About.css";
import fam1 from "../files/fam1.png";
import cs from "../files/cs.png";
import fam3 from "../files/fam3.png";


function About() {
  return (
    <div className="about-container">
      <h1 className="about-header">About Me</h1>
      <div className="about-grid">
        {/* Image 1 */}
        <div className="about-card">
        <img src={fam1} alt="Family" />
          <div className="about-overlay">
            <div className="about-text">
              <h2>My Family</h2>
              <p>
                My family is my world. With two loving parents and an older
                brother, I’ve learned the values of kindness, resilience, and
                unwavering support. They are my greatest source of strength and
                inspiration.
              </p>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="about-card">
        <img src={cs} alt="Friends" />

          <div className="about-overlay">
            <div className="about-text">
              <h2>My Career</h2>
              <p>
               Currently, I am studying computer science at UTD, where I aspire to become a corporate software engineer or mayve even create my own business. I have a concentration in fintech so I like to study stock modeling as well. 
              </p>
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="about-card">
        <img src={fam3} alt="Hobbies" />
          <div className="about-overlay">
            <div className="about-text">
              <h2>Hobbies</h2>
              <p>
                
                Outside of my career, I like to play basketball. I have been playing since I was 4 years old and even played all throughout high school. Since college I haven't gotten the time to play as much as before, but still definitley keep up with it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
