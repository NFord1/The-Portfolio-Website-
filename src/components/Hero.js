import React from 'react';

const Hero = () => {
    return(
        <section id='hero' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem'}}>
            <div className='hero-text' style={{maxWidth: '50%'}}>
                <h1>Hi, I'm Nathan Ford</h1>
                <h2>Backend Developer and Full Stack Engineer</h2>
                <p>Building scalable backend solutions for modern applications.</p>
                <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth'})}>
                    View My Work
                </button>
            </div>
            <div className='hero-chatbot'>
                {/*Placeholder for Chatbot*/}
                <p>Chatbot Placeholder</p>
            </div>
        </section>
    );
};

export default Hero;