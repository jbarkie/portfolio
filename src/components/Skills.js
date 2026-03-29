import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faReact, faAngular, faSquareJs, faHtml5, faNodeJs, faAws, faGithub, faLinux, faApple, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Skills() {
    const icons = [faJava, faPython, faReact, faAngular, faSquareJs, faHtml5, faNodeJs, faAws, faGithub, faLinux, faApple, faWindows];
    const programmingLanguages = ['Python', 'Java', 'C', 'C++', 'C#', 'React', 'JavaScript', 'SQL', 'Bash', 'HTML', 'CSS'];
    const tools = ['Agile Development & Scrum', 'ASP.NET MVC', 'Angular', 'Docker', 'AWS', 'DynamoDB', 'Postman', 'SpecFlow', 'Selenium', 'JUnit', 'Microsoft SQL Server'];

    return (
        <>
        <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-1" id="skills-heading">Skills</h2>
                <div className="subheading mb-1">Programming Languages &amp; Tools</div>
                <Icons icons={icons} />
                <div className="two-column-container">
                    <Descriptions items={tools} />
                    <Descriptions items={programmingLanguages} />
                </div>
            </div>
        </section>
        <hr className="m-0" />
        </>
    );
};

function Icons({ icons }) {
    return (
        <ul className="list-inline dev-icons">
            {icons.map((icon, index) => (
                <li className="list-inline-item" key={index}>
                    <FontAwesomeIcon icon={icon} />
                </li>
            ))}
        </ul>
    );
};

function Descriptions({ items }) {
    return (
        <div>
            <ul className="fa-ul mb-0">
                {items.map((item, index) => (
                    <li key={index}>
                        <span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
