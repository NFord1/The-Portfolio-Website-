import React from "react";

// Sample project data - replace with real data or use props to pass data later
const projectData = [
    {
        id: 1,
        title: "E-commerce API",
        description: "A REST API for managing e-commerce transactions.",
        techStack: ["Node.js", "Express", "MongoDB"],
        githubLink: "https://github.com/yourusername/ecommerce-api",
        imageUrl: "path/to/image1.jpg", // Replace with actual paths to images in assets
    },
    {
        id: 2,
        title: "Real-time Chat App",
        description: "A chat application backend with WebSockets for instant communication.",
        techStack: ["Node.js", "WebSocket", "Redis"],
        githubLink: "https://github.com/yourusername/chat-app",
        imageUrl: "path/to/image2.jpg",
      },
      // Add more projects as needed
];

const Projects = () => {
    return (
        <section id="projects" style={{ padding: '2rem', textAlign: 'center'}}>
            <h2>Projects</h2>
            <div className="project-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem'}}>
                {projectData.map((project) => (
                    <a
                        key={project.id}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit', position: 'relative', overflow: 'hidden', borderRadius: '8px'}}
                    >
                        <div className="project-card" style={{ position: 'relative', cursor: "pointer"}}>
                            <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
                            <div className="project-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', opacity: 0, transition: 'opacity o.3s ease'}}>
                                <h3 style={{ color: '#fff', marginBottom: '0.5rem'}}>{project.title}</h3>
                                <p style={{color: '#ddd', marginBottom: '0.5rem'}}>{project.description}</p>
                                <p style={{ color: '#bbb', fontSize: '0.9rem' }}>{project.techStack.join(', ')}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;