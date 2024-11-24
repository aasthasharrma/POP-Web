import React from "react";
import "./ProjectDetail.css";

function Project2() {
  return (
    <div className="project-detail-container">
      <div className="content-box">
        <h1>Email Activity</h1>
        <p className="description">
        In this project, I reviewed Ms. Shi’s original email to identify areas for improvement in clarity, tone, grammar, and organization, keeping in mind the email’s audience and professional context. Using the Track Changes and Comments features in Word, I provided constructive feedback on vague or overly wordy sentences, suggested adjustments to align the tone with workplace standards, and corrected grammar or formatting issues. Additionally, I restructured parts of the email to ensure the main points were clear and logically organized. To further assist, I wrote a fully revised version of the email, focusing on conciseness, professionalism, and engagement, and concluded the task by drafting a polished email reply to Ms. Shi summarizing my feedback and sharing the revised version for her consideration.
        </p>
        <div className="image-gallery">
          <div className="image-item">
            <img src={require("../files/email1.png")} alt="Project 2 - Image 1" />
          </div>
          <div className="image-item">
            <img src={require("../files/email4.png")} alt="Project 2 - Image 2" />
          </div>
          <div className="image-item">
            <img src={require("../files/email5.png")} alt="Project 2 - Image 3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project2;
