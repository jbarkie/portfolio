import React from 'react';

export default function Experience() {
    return (
        <div>
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                <h3 className="mb-0">Software Developer Intern</h3>
                <div className="subheading mb-3">Progressive Insurance</div>
                <p>
                    Developing and maintaining automated regression tests for .NET web applications using Selenium and SpecFlow.
                </p>
                <p>
                    Designing and developing an Angular web application for a $1.5 billion subset of Progressive customers.
                </p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">May 2023 - Present</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                <h3 className="mb-0">Web Developer</h3>
                <div className="subheading mb-3">Colorado State University Honors Program</div>
                <p>Responsible for maintaining the Honors Program website used daily by over 1,900 students and faculty and database management.</p>
                <p>Develop and maintain web applications using ASP.NET MVC and Microsoft SQL Server on the back end and MojoPortal and Bootstrap on the front end.</p> 
                <p>Troubleshoot and resolve user issues in a timely manner.</p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">November 2021 - Present</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                <h3 className="mb-0">Research Assistant</h3>
                <div className="subheading mb-3">Colorado State University Computer Science Department</div>
                <p>Contribute to research on privacy threats in the collection of data from various Android health and fitness apps using machine learning tools and Android Studio.</p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">February 2023 - May 2023</span></div>
            </div>
            </div>
        </section>
        <hr className="m-0" />
        </div>
    );
};