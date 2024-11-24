import React from "react";
import "./Resume.css";
import resumePDF from "../files/TechResume3PDF.pdf"; // Ensure your resume is in the src/files folder

function Resume() {
  return (
    <div className="resume-container">
      <div className="content-box">
        <div className="resume-text">
          <h1>My Resume</h1>
          <p>
            Below is a preview of my resume. You can also download a copy using
            the button below.
          </p>
          <a
            href={resumePDF}
            download="YourName_Resume.pdf"
            className="download-button"
          >
            Download Resume
          </a>
        </div>
        <div className="resume-preview">
          <embed
            src={resumePDF}
            type="application/pdf"
            width="100%"
            height="500px"
          />
        </div>
      </div>
    </div>
  );
}

export default Resume;
