import React from 'react';
import Schools from '../models/Schools';

export default function Education() {
    return (
        <div>
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-4">Education</h2>
                    {Schools.map((details, index) => <School key={index} {...details} />)}
                </div>
            </section>
            <hr className="m-0" />
        </div>
    );
};

function School({ school, degree, date, gpa, honor }) {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
            <div className="flex-grow-1">
                <h3 className="mb-0">{school}</h3>
                <div className="subheading mb-2">{degree}</div>
                <div className="date-range-mobile"><p>{date}</p></div>
                <p>GPA: {gpa}</p>
                <p>{honor}</p>
            </div>
            <div className="flex-shrink-0">
                <span className="date-range-heading">{date}</span>
            </div>
        </div>
    );
};
