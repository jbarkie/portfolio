import React from "react";

export default function Experience() {
  return (
    <div>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-3">Experience</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
            <div className="flex-grow-1">
              <h3 className="mb-0">Software Developer Intern</h3>
              <div className="subheading mb-2">Progressive Insurance</div>
              <div className="date-range-mobile"><p>May 2023 - August 2023</p></div>
              <p>
                Designed and developed an Angular web application for a $1.5 billion subset of customers that saves approximately 302 hours of labor each year.
              </p>
              <p>
                Developed and maintained a suite of automated regression tests for .NET web applications, leveraging C#, Selenium, and SpecFlow to decrease overall testing time and improve product quality.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="date-range-heading">May 2023 - August 2023</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
            <div className="flex-grow-1">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-2">
                Colorado State University Honors Program
              </div>
              <div className="date-range-mobile"><p>November 2021 - December 2023</p></div>
              <p>
                Maintain the Honors Program website which is used daily by over 1,900 students and faculty.
              </p>
              <p>
                Develop web applications using ASP.NET MVC and
                Microsoft SQL Server on the back end, and MojoPortal and
                Bootstrap on the front end.
              </p>
              <p>Reduced user-reported incidents by 20% year-over-year by implementing new features and fixing defects.</p>
            </div>
            <div className="flex-shrink-0">
              <span className="date-range-heading">
                November 2021 - December 2023
              </span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
            <div className="flex-grow-1">
              <h3 className="mb-0">Research Assistant</h3>
              <div className="subheading mb-2">
                CSU Computer Science Department
              </div>
              <div className="date-range-mobile"><p>February 2023 - May 2023</p></div>
              <p>
                Researched security threats in Android health and fitness apps using machine learning and natural language processing tools.
              </p>
              <p>Developed a Python program to detect if a given Android application uses unsafe permissions and poses a privacy threat to users.</p>
            </div>
            <div className="flex-shrink-0">
              <span className="date-range-heading">
                February 2023 - May 2023
              </span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}
