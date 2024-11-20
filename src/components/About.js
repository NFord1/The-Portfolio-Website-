import React from "react";

// Import skill icons
import javascriptIcon from '../assets/javascript.svg';
import assemblyIcon from '../assets/assembly.svg';
import cIcon from '../assets/c.svg';
import cppIcon from '../assets/c++.svg';
import cssIcon from '../assets/css.svg';
import expressIcon from '../assets/express.svg';
import typecriptIcon from '../assets/typescript.svg';
import htmlIcon from '../assets/html.svg';
import matlabIcon from '../assets/matlab.svg';
import nodejsIcon from '../assets/nodejs.svg';
import postgresqlIcon from '../assets/postgresql.svg';
import pythonIcon from '../assets/python.svg';
import rIcon from '../assets/R.svg';
import reactIcon from '../assets/react.svg';
import sqlIcon from '../assets/sql.svg';

// Define an array of skill objects with name and icon properties
const skills = [
    { name: 'HTML', icon: htmlIcon},
    { name: 'CSS', icon: cssIcon},
    { name: 'Express.js', icon: expressIcon},
    { name: 'TypeScript', icon: typecriptIcon},
    { name: 'JavaScript', icon: javascriptIcon},
    { name: 'Node.js', icon: nodejsIcon},
    { name: 'SQL', icon: sqlIcon},
    { name: 'PostgreSQL', icon: postgresqlIcon},
    { name: 'React', icon: reactIcon},
    { name: 'Python', icon: pythonIcon},
    { name: 'MATLAB', icon: matlabIcon},
    { name: 'C', icon: cIcon},
    { name: 'C++', icon: cppIcon},
    { name: 'R', icon: rIcon},
    { name: 'Assembly', icon: assemblyIcon},
]

const About = () => {
    return(
        // Define the About section with styling
        <section id="about" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="about-intro" style={{ maxWidth: '70%', textAlign: 'center'}}>
                <h2>About Me</h2>
                <p>
                    {/* Introduction paragraph */}
                    I’m a full-stack developer with a strong foundation in engineering, physics, and computer science, fueled by a passion for building exciting, practical software to solve real-world problems. 
                    My journey began with 3.5 years studying Mechatronic Engineering and Physics at the University of Sydney, where I gained hands-on experience in problem-solving and engineering 
                    principles. More recently, I completed a Full Stack Engineering course, which solidified my skills in web development, backend technologies, 
                    and database management.
                </p>
                <p>
                    {/* Additional background information */}
                    My background has equipped me with a unique perspective on software development, allowing me to approach projects with an engineering mindset 
                    and a strong focus on problem solving. I am enthusiastic about continuing to grow as a full-stack engineer, and I look forward to diving deeper
                    into areas like AI and machine learning, cloud computing, and cybersecurity.
                </p>
                <ul>
                    {/* List of skills and interests */}
                    <li><strong>Backend Technologies:</strong> Node.js, Express.js</li>
                    <li><strong>Frontend Technologies:</strong> JavaScript, React, TypeScript</li>
                    <li><strong>Databases:</strong> SQL, PostgreSQL</li>
                    <li><strong>Programming Languages:</strong> Python, C, C++, MATLAB, R</li>
                    <li><strong>Additional Interests:</strong> AI/ML, Cybersecurity, Cloud Computing, IoT</li>
                </ul>
            </div>

            <div className="skills-grid">
                {/* Render skill cards */}
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
                        <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;