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
    { name: 'JavaScript', icon: javascriptIcon},
    { name: 'Assembly', icon: assemblyIcon},
    { name: 'C', icon: cIcon},
    { name: 'C++', icon: cppIcon},
    { name: 'CSS', icon: cssIcon},
    { name: 'Express.js', icon: expressIcon},
    { name: 'TypeScript', icon: typecriptIcon},
    { name: 'HTML', icon: htmlIcon},
    { name: 'MATLAB', icon: matlabIcon},
    { name: 'Node.js', icon: nodejsIcon},
    { name: 'PostgreSQL', icon: postgresqlIcon},
    { name: 'Python', icon: pythonIcon},
    { name: 'R', icon: rIcon},
    { name: 'React', icon: reactIcon},
    { name: 'SQL', icon: sqlIcon},
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

            <div className="skills-icons" style={{marginTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem'}}>
                {/* Replace with skill icons in the assets folder or use placeholders for now */}
                <div className="skill-icon">JavaScript</div>
                <div className="skill-icon">Node.js</div>
                <div className="skill-icon">React</div>
                <div className="skill-icon">Express.js</div>
                <div className="skill-icon">SQL</div>
                <div className="skill-icon">Git</div>
                {/* Add more as needed */}
            </div>
        </section>
    );
};

export default About;