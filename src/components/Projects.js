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
        title: "E-commerce Web App",
        description: "An e-commerce web application where users can securely login, browse products, manage their cart, and complete purchases with real-time Stripe payment processing. Authenticated users can view order history and account details. This project demonstrates a RESTful API with full CRUD capabilities.",
        techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "Passport.js", "Stripe API"],
        githubLink: "https://github.com/yourusername/chat-app",
        imageUrl: require("../assets/Project Images/Example project image.png"),
      },
      {
        id: 3,
        title: "Budget App",
        description: "A chat application backend with WebSockets for instant communication.",
        techStack: ["Node.js", "WebSocket", "Redis"],
        githubLink: "https://github.com/yourusername/chat-app",
        imageUrl: require("../assets/Project Images/Example project image.png"),
      },
      {
        id: 4,
        title: "Restaurant Review Site",
        description: "A site where users can view a list of saved restaurants, add to that list, star their favorite restaurants, and leave comments about these places.",
        techStack: ["Node.js", "WebSocket", "Redis"],
        githubLink: "https://github.com/yourusername/chat-app",
        imageUrl: require("../assets/Project Images/Restaurant Review Site.gif"),
      },
      {
        id: 5,
        title: "Portfolio Website",
        description: "A chat application backend with WebSockets for instant communication.",
        techStack: ["Node.js", "WebSocket", "Redis"],
        githubLink: "https://github.com/yourusername/chat-app",
        imageUrl: require("../assets/Project Images/Example project image.png"),
      },
      {
        id: 6,
        title: "MATLAB",
        description: "A chat application backend with WebSockets for instant communication.",
        techStack: ["Node.js", "WebSocket", "Redis"],
        githubLink: "https://github.com/yourusername/chat-app",
        imageUrl: require("../assets/Project Images/Example project image.png"),
      },
      {
        id: 7,
        title: "Python",
        description: "A chat application backend with WebSockets for instant communication.",
        techStack: ["Node.js", "WebSocket", "Redis"],
        githubLink: "https://github.com/yourusername/chat-app",
        imageUrl: require("../assets/Project Images/Example project image.png"),
      },
      {
        id: 8,
        title: "C/C++",
        description: "A chat application backend with WebSockets for instant communication.",
        techStack: ["Node.js", "WebSocket", "Redis"],
        githubLink: "https://github.com/yourusername/chat-app",
        imageUrl: require("../assets/Project Images/Example project image.png"),
      },
      {
        id: 9,
        title: "Maze Solver Robot",
        description: "A chat application backend with WebSockets for instant communication.",
        techStack: ["Node.js", "WebSocket", "Redis"],
        githubLink: "https://github.com/yourusername/chat-app",
        imageUrl: require("../assets/Project Images/Example project image.png"),
      },
      {
        id: 10,
        title: "Grocery Item Tracker Robot",
        description: "A chat application backend with WebSockets for instant communication.",
        techStack: ["Node.js", "WebSocket", "Redis"],
        githubLink: "https://github.com/yourusername/chat-app",
        imageUrl: require("../assets/Project Images/Example project image.png"),
      },
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