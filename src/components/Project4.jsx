import React from "react";
import "./ProjectDetail.css";

function Project4() {
  return (
    <div className="project-detail-container">
      <div className="content-box">
        <h1>Description</h1>
        <p className="description">
          Throughout our BCOM 3300 class, we actively engaged in giving and
          receiving constructive criticism to foster mutual improvement. With
          each assigned project, such as the data-tracking activity and group
          presentation, we were encouraged to provide thoughtful feedback to
          our peers. This feedback aimed to highlight strengths and identify
          areas for growth, helping everyone enhance their performance in the
          class.
        </p>
        <p className="description">
          In addition to offering feedback, we were responsible for carefully
          reviewing the critiques we received. This allowed us to recognize and
          address any shortcomings in our initial assignments. By incorporating
          this feedback into our work, we could refine our skills and produce
          better results in subsequent tasks, making the process a valuable
          learning experience for both sides.
        </p>
        <div className="pdf-gallery">
          {/* Review Document 1 */}
          <div className="pdf-item">
            <h2>Given Review</h2>
            <embed
              src={require("../files/review1.pdf")}
              type="application/pdf"
              title="Review Document 1"
              className="pdf-embed"
            />
            <a
              href={require("../files/review1.pdf")}
              download="Given_Review.pdf"
              className="download-button"
            >
              Download Given Review
            </a>
          </div>

          {/* Review Document 2 */}
          <div className="pdf-item">
            <h2>Received Review</h2>
            <embed
              src={require("../files/review2.pdf")}
              type="application/pdf"
              title="Review Document 2"
              className="pdf-embed"
            />
            <a
              href={require("../files/review2.pdf")}
              download="Received_Review.pdf"
              className="download-button"
            >
              Download Received Review
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project4;
