import React from "react";
import "./ProjectDetail.css";

function Project2() {
  return (
    <div className="project-detail-container">
      <div className="content-box">
        <h1>Email Activity</h1>
        <p className="description">
          In this project, I reviewed Ms. Shi’s original email to identify areas
          for improvement in clarity, tone, grammar, and organization, keeping
          in mind the email’s audience and professional context. Using the Track
          Changes and Comments features in Word, I provided constructive
          feedback on vague or overly wordy sentences, suggested adjustments to
          align the tone with workplace standards, and corrected grammar or
          formatting issues. Additionally, I restructured parts of the email to
          ensure the main points were clear and logically organized. To further
          assist, I wrote a fully revised version of the email, focusing on
          conciseness, professionalism, and engagement, and concluded the task
          by drafting a polished email reply to Ms. Shi summarizing my feedback
          and sharing the revised version for her consideration.
        </p>
        <div className="pdf-gallery">
          <div className="pdf-item">
            <h2>Response</h2>
            <embed
              src={require("../files/email1.pdf")}
              type="application/pdf"
              width="100%"
              height="400px"
            />
            <a
              href={require("../files/email1.pdf")}
              download="Response.pdf"
              className="download-button"
            >
              Download Response
            </a>
          </div>
          <div className="pdf-item">
            <h2>Comments</h2>
            <embed
              src={require("../files/email4.pdf")}
              type="application/pdf"
              width="100%"
              height="400px"
            />
            <a
              href={require("../files/email4.pdf")}
              download="Comments.pdf"
              className="download-button"
            >
              Download Comments
            </a>
          </div>
          <div className="pdf-item">
            <h2>Feedback</h2>
            <embed
              src={require("../files/email5.pdf")}
              type="application/pdf"
              width="100%"
              height="400px"
            />
            <a
              href={require("../files/email5.pdf")}
              download="Feedback.pdf"
              className="download-button"
            >
              Download Feedback
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project2;
