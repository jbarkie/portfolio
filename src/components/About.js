import React from 'react';
import headshot from '../images/headshot.jpg'

export default function About() {
    return (
        <div>
        <section className="resume-section" id="about">
            <div className="resume-section-content">
            <h1>
                <div className="about-mobile-view">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={headshot} alt="A headshot of Joe" />
                </div>
                Hello, I'm
                <span className="text-primary"> Joe Barkie</span>
            </h1>
            <p className="lead mb-5" id="about-p">
            I am a software developer based in Fort Collins, Colorado, currently working for Progressive Insurance. I graduated cum laude in December 2023 from Colorado State University with a degree in Computer Science. I am passionate for all things technology, and have valuable experience in full-stack development using technologies like ASP.NET MVC, Java, React, Angular, SQL, AWS, and Docker. Although I am just starting my career, I am eager to learn and grow in my journey towards becoming a proficient and versatile software engineer.
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