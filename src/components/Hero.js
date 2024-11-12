import React, {useState} from 'react';
import AIBubble from "../assets/AIBubble.gif"

const Hero = () => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    return(
        <section id='hero' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem'}}>
            <div className='hero-text' style={{maxWidth: '50%'}}>
                <h1>Nathan Ford</h1>
                <h2>Software Engineer - Full Stack</h2>
                <p>Background in Physics & Mechatronic Engineering</p>
                <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth'})}>
                    View My Work
                </button>
            </div>
            <div className='hero-chatbot'>
                {/*Placeholder for Chatbot*/}
                <img src={AIBubble} alt='AI Bubble' className='chatbot-gif' />
                <p>Welcome! Curious about my projects? I’m here to guide you through my portfolio and answer any questions along the way. I'm a work in progress, but I guess for a software engineer, such is life! Let’s dive in!</p>
                <input
                    type='text'
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder='Type your message here...'
                    className='chatbot-input'
                />
                
            </div>
        </section>
    );
};

export default Hero;