import React from 'react';

export default function About() {
    return (
        <div>
        <section className="resume-section" id="about">
            <div className="resume-section-content">
            <h1 className="mb-0">
                Joseph
                <span className="text-primary">Barkie</span>
            </h1>
            <div className="subheading mb-5">
                1225 W Prospect Rd Apt D208 · Fort Collins, CO 80526 · (860) 301-4592 
            </div>
            <p className="lead mb-5">
            I am an undergraduate student studying Computer Science at Colorado State University, graduating in December 2023. I work as a Software Developer Intern for Progressive Insurance and as a Web Developer for the University Honors Program at CSU. 
            </p>
            <div className="social-icons">
                <a className="social-icon" href="https://www.linkedin.com/in/josephbarkie/"><i className="fab fa-linkedin-in" /></a>
                <a className="social-icon" href="https://github.com/jbarkie"><i className="fab fa-github" /></a>
                <a className="social-icon" href="mailto:josephbarkie@hotmail.com"><i className="fa-solid fa-envelope" /></a>
            </div>
            </div>
        </section>
        <hr className="m-0" />
        </div>
    );
};