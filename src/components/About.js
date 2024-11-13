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
        <section id="about" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="about-intro" style={{ maxWidth: '70%', textAlign: 'center'}}>
                <h2>About Me</h2>
                <p>
                    I'm a backend developer with a passion for building efficient and scalable solutions.
                    With experience in Node.js, SQL and web security, I aim to create software that's not
                    only functional but also secure and reliable.
                </p>
                <ul>
                    <li>Backend Technologies: Node.js, Express</li>
                    <li>Databases: SQL, PostgreSQL</li>
                    <li>VErsion Control: Git & GitHub</li>
                    <li>Web Security, data Structures, and Algorithms</li>
                </ul>
            </div>

            <div className="skills-grid" >
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