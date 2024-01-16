import React from 'react';

export default function Education() {
    return (
        <div>
        <section className="resume-section" id="education">
            <div className="resume-section-content">
            <h2 className="mb-4">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                <div className="flex-grow-1">
                <h3 className="mb-0">Colorado State University</h3>
                <div className="subheading mb-2">Bachelor of Science - Computer Science</div>
                <div className="date-range-mobile"><p>August 2021 - December 2023</p></div>
                <p>GPA: 3.94</p>
                <p>Graduated cum laude and made Dean's List every semester.</p>
                </div>
                <div className="flex-shrink-0"><span className="date-range-heading">August 2021 - December 2023</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                <div className="flex-grow-1">
                <h3 className="mb-0">Front Range Community College</h3>
                <div className="subheading mb-2">Associate of the Arts</div>
                <div className="date-range-mobile"><p>August 2018 - May 2020</p></div>
                <p>GPA: 3.0</p>
                <p>Earned a Certificate of Business Specialization.</p>
                </div>
                <div className="flex-shrink-0"><span className="date-range-heading">August 2018 - May 2020</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                <div className="flex-grow-1">
                <h3 className="mb-0">Haddam-Killingworth High School</h3>
                <div className="subheading mb-2">High School Diploma</div>
                <div className="date-range-mobile"><p>August 2014 - June 2018</p></div>
                <p>GPA: 4.13</p>
                <p>Graduated 9th in my class of 155.</p>
                </div>
                <div className="flex-shrink-0"><span className="date-range-heading">August 2014 - June 2018</span></div>
            </div>
            </div>
        </section>
        <hr className="m-0" />
        </div>
    );
};