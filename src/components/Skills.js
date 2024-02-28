import React from 'react';

export default function Skills() {
    const icons = ['java', 'python', 'react', 'angular', 'js-square', 'html5', 'node-js', 'aws', 'github', 'linux', 'apple', 'windows'];
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

function Icons(props) {
    return (
        <ul className="list-inline dev-icons">
            {props.icons.map((icon, index) => (
                <li className="list-inline-item" key={index}>
                    <i className={`fab fa-${icon}`} />
                </li>
            ))}
        </ul>
    );
};
  
function Descriptions(props) {
    return (
        <div>
            <ul className="fa-ul mb-0">
                {props.items.map((item, index) => (
                    <li key={index}>
                        <span className="fa-li"><i className="fas fa-check" /></span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};