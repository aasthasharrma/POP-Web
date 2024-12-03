import React from "react";
import "./ProjectDetail.css";

function Project3() {
  return (
    <div className="project-detail-container">
      <div className="content-box">
        <h1>Description</h1>
        <p className="description">
          In our group presentation, we were tasked with acting as experienced interns at a corporate company, presenting to new interns about a critical topic that could enhance their performance. We chose to focus on the role of emotional intelligence in the workplace, a subject that has a significant impact on professional interactions and success. To begin, we provided a clear definition of emotional intelligence, explaining its components and importance in understanding and managing emotions in a professional setting.
        </p>
        <p className="description">
          After establishing the concept, we shared real-world examples to illustrate how emotional intelligence manifests in the workplace. These examples highlighted scenarios where emotional intelligence plays a key role, such as resolving conflicts, improving teamwork, and fostering effective communication. Our goal was to emphasize how mastering emotional intelligence can lead to a more harmonious and productive work environment, ultimately inspiring the new interns to develop this essential skill.
        </p>
        <div className="pdf-viewer">
          <h2>Presentation Slides</h2>
          <embed
            src={require("../files/presentation.pdf")}
            type="application/pdf"
            width="100%"
            height="600px"
          />
          <a
            href={require("../files/presentation.pdf")}
            download="Presentation_Slides.pdf"
            className="download-button"
          >
            Download Presentation Slides
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project3;
