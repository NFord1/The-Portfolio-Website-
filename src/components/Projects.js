import React from "react";

// Sample project data - replace with real data or use props to pass data later
const projectData = [
    {
        id: 1,
        title: "Text Styler Canva App",
        description: "A Canva App that uses advanced AI to understand your design and provide suggestions for how to best style your text contents' font, colour and position within the design.",
        techStack: ["React", "TypeScript", "Node.js", "Express", "Canva SDK", "OpenAI API"],
        githubLink: "https://github.com/NFord1/Text-Styler-Canva-App",
        imageUrl: require("../assets/Project Images/Text Styler.png"), // Replace with actual paths to images in assets
    },
    {
        id: 2,
        title: "Real-time Chat App",
        description: "A chat application backend with WebSockets for instant communication.",
        techStack: ["Node.js", "WebSocket", "Redis"],
        githubLink: "https://github.com/yourusername/chat-app",
        imageUrl: require("../assets/Project Images/Example project image.png"),
      },
      {
        id: 3,
        title: "Real-time Chat App",
        description: "A chat application backend with WebSockets for instant communication.",
        techStack: ["Node.js", "WebSocket", "Redis"],
        githubLink: "https://github.com/yourusername/chat-app",
        imageUrl: require("../assets/Project Images/Example project image.png"),
      },
      {
        id: 4,
        title: "Real-time Chat App",
        description: "A chat application backend with WebSockets for instant communication.",
        techStack: ["Node.js", "WebSocket", "Redis"],
        githubLink: "https://github.com/yourusername/chat-app",
        imageUrl: require("../assets/Project Images/Example project image.png"),
      },
      {
        id: 5,
        title: "Real-time Chat App",
        description: "A chat application backend with WebSockets for instant communication.",
        techStack: ["Node.js", "WebSocket", "Redis"],
        githubLink: "https://github.com/yourusername/chat-app",
        imageUrl: require("../assets/Project Images/Example project image.png"),
      },
      {
        id: 6,
        title: "Real-time Chat App",
        description: "A chat application backend with WebSockets for instant communication.",
        techStack: ["Node.js", "WebSocket", "Redis"],
        githubLink: "https://github.com/yourusername/chat-app",
        imageUrl: require("../assets/Project Images/Example project image.png"),
      },
      {
        id: 7,
        title: "Real-time Chat App",
        description: "A chat application backend with WebSockets for instant communication.",
        techStack: ["Node.js", "WebSocket", "Redis"],
        githubLink: "https://github.com/yourusername/chat-app",
        imageUrl: require("../assets/Project Images/Example project image.png"),
      },
      // Add more projects as needed
];

const Projects = () => {
    return (
        <section id="projects" >
            <h2>Projects</h2>
            <div className="project-grid" >
                {projectData.map((project) => (
                    <a
                        key={project.id}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                    >
                        <div className="project-image-container" >
                            <img src={project.imageUrl} alt={project.title} className="project-image" />
                            <div className="project-overlay" >
                                <p className="project-description">{project.description}</p>
                                <p className="project-techStack">{project.techStack.join(', ')}</p>
                            </div>
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;