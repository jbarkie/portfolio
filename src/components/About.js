import React from 'react';
import headshot from '../images/headshot.jpg'

export default function About() {
    return (
        <div>
        <section className="resume-section" id="about">
            <div className="resume-section-content">
            <div className="about-mobile-view">
                <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={headshot} alt="A headshot photograph of Joe" />
            </div>
            <h1 className="mb-0">
                Joseph
                <span className="text-primary"> Barkie</span>
            </h1>
            <div className="subheading mb-5">
                1225 W Prospect Rd Apt D208 · Fort Collins, CO 80526 · (860) 301-4592 
            </div>
            <p className="lead mb-5">
            I am an undergraduate Computer Science student at Colorado State University, graduating in December 2023. I am a Web Developer for the University Honors Program at CSU and have valuable experience in full-stack development with ASP.NET MVC. Through my studies, I have also developed skills in Java, Python, C, C++, Python, Angular, SQL, AWS, Docker, and other languages and technologies. 
            </p>
            <div className="social-icons">
                <a className="social-icon" href="https://www.linkedin.com/in/josephbarkie/"><i className="fab fa-linkedin-in" /></a>
                <a className="social-icon" href="https://github.com/jbarkie"><i className="fab fa-github" /></a>
                <a className="social-icon" href="https://twitter.com/jbarkie27"><i className="fab fa-twitter" /></a>
                <a className="social-icon" href="https://www.facebook.com/joe.barkie/"><i className="fab fa-facebook" /></a>
                <a className="social-icon" href="mailto:josephbarkie@hotmail.com"><i className="fa-solid fa-envelope" /></a>
            </div>
            </div>
        </section>
        <hr className="m-0" />
        </div>
    );
};