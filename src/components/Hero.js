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
                <h1>Hi, I'm Nathan Ford</h1>
                <h2>Backend Developer and Full Stack Engineer</h2>
                <p>Building scalable backend solutions for modern applications.</p>
                <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth'})}>
                    View My Work
                </button>
            </div>
            <div className='hero-chatbot'>
                {/*Placeholder for Chatbot*/}
                <img src={AIBubble} alt='AI Bubble' className='chatbot-gif' />
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