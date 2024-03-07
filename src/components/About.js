import React from 'react';
import headshot from '../images/headshot.jpg'
import SocialIcons from '../models/SocialIcons';

export default function About() {
    return (
        <div>
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <MobileProfilePicture />
                <MainHeading />
                <p className="lead mb-5" id="about-p">
                I am a software developer based in Fort Collins, Colorado, currently working for Progressive Insurance. I graduated from Colorado State University in December 2023 with a degree in Computer Science. I am passionate for all things technology, and have valuable experience in full-stack development using technologies like ASP.NET MVC, Java, React, Angular, SQL, AWS, and Docker. Although I am just starting my career, I am eager to learn and grow in my journey towards becoming a proficient and versatile software engineer.
                </p>
                <div className="social-icons">
                    {SocialIcons.map((details, index) => <SocialMediaLinks key={index} {...details} />)}
                </div>
            </div>
        </section>
        <hr className="m-0" />
        </div>
    );
};

function SocialMediaLinks({ name, className, href }) {
    return (
        <a className="social-icon" href={href} aria-label={name}><i className={className}/></a>
    );
};

function MobileProfilePicture() {
    return (
        <div className="about-mobile-view">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={headshot} alt="A headshot of Joe" />
        </div>
    );
};

function MainHeading() {
    return (
        <h1>
            Hello, I'm <br className="about-mobile-view" />
            <span className="text-primary"> 
                <p className="typewrite" data-period="2000" data-type='[ " Joe Barkie.", " a software developer.", " a Colorado State alum.", " pleased to meet you!"]'>
                <span className="wrap"></span>
                </p>
            </span>
        </h1>
    );
};