import React from "react";
import Jobs from "../models/jobs.js";

export default function Experience() {
  return (
    <div>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-3">Experience</h2>
          {Jobs.map((details, index) => (
            <Job key={index} {...details} />
          ))}
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}

function Job({ title, company, date, description }) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
      <div className="flex-grow-1">
        <h3 className="mb-0">{title}</h3>
        <div className="subheading mb-2">{company}</div>
        <div className="date-range-mobile">
          <p>{date}</p>
        </div>
        {description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="flex-shrink-0">
        <span className="date-range-heading">{date}</span>
      </div>
    </div>
  );
}
