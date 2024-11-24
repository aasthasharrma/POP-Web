import React from "react";
import "./ProjectDetail.css";

function Project1() {
  return (
    <div className="project-detail-container">
      <div className="content-box">
        <h1>Description</h1>
        <p className="description">
        To collect this data, I tracked my daily steps and the corresponding distance in miles over a six-week period. Using a step-tracking app on my phone, I recorded the total steps I took each day and calculated the average steps and distance per week. This allowed me to see any patterns in my activity levels over time. I then entered the weekly data into Microsoft Excel and created a graph to visualize the trends in steps and distance, helping me better understand my physical activity habits.
The graph reveals several insights. Most notably, there was a significant increase in steps and distance from week 1 through week 5, reaching a peak average of 8,728 steps and 3.11 miles in week 5. However, in week 6, there was a substantial drop to 2,083 steps and 0.79 miles. This fluctuation might suggest factors like increased activity due to specific events or motivations in weeks 4 and 5, followed by a potential decrease in motivation, a busy schedule, or illness in week 6. Overall, the data and visualization underscore how physical activity levels can vary week-to-week and highlight areas where I could aim for more consistency in my daily activity.

        </p>
        <div className="image-gallery">
          <div className="image-item">
          <img src={require("../files/graph1.png")} alt="About Me - Section 1" />
          </div>
          <div className="image-item">
          <img src={require("../files/graph2.png")} alt="About Me - Section 1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
