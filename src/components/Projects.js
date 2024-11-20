import React from "react";

// Array containing project data
const projectData = [
    {
        id: 1,
        title: "Text Styler Canva App",
        description: "A Canva App that uses advanced AI to understand your design and provide suggestions for how to best style your text contents' font, colour and position within the design.",
        techStack: ["React", "TypeScript", "Node.js", "Express", "Canva SDK", "OpenAI API"],
        githubLink: "https://github.com/NFord1/Text-Styler-Canva-App",
        imageUrl: require("../assets/Project Images/Text Styler.png"), 
    },
    {
        id: 2,
        title: "E-commerce Web App",
        description: "An e-commerce web application where users can securely login, browse products, manage their cart, and complete purchases with real-time Stripe payment processing. Authenticated users can view order history and account details. This project demonstrates a RESTful API with full CRUD capabilities.",
        techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "Passport.js", "Stripe API"],
        githubLink: "https://github.com/NFord1/E-commerce-App.git",
        imageUrl: require("../assets/Project Images/E-commerce Web App.gif"),
      },
      {
        id: 3,
        title: "ML Pipeline for Survival Prediction",
        description: "A machine learning pipeline to preprocess and clean pediatric bone marrow transplant data and predict survival status. The pipeline handled numerical and categorical data separately, performed feature scaling, encoding, and dimensionality reduction (PCA), and used grid search to optimize classifier hyperparameters. Achieved a final model accuracy of 82%.",
        techStack: ["Python"],
        githubLink: "https://github.com/NFord1/ML-Pipeline-Bone-Marrow-Transplant",
        imageUrl: require("../assets/Project Images/ML Pipeline.png"),
      },
      {
        id: 4,
        title: "Restaurant Review Site",
        description: "A site where users can view a list of saved restaurants, add to that list, star their favorite restaurants, and leave comments about these places.",
        techStack: ["Node.js", "WebSocket", "Redis"],
        githubLink: "https://github.com/NFord1/Restaurant-Reviews-Site-.git",
        imageUrl: require("../assets/Project Images/Restaurant Review Site.gif"),
      },
      {
        id: 5,
        title: "Portfolio Website",
        description: "A responsive and visually engaging portfolio website designed to showcase my projects, skills, and experiences. It includes an interactive projects section, a custom AI-powered chatbot for project filtering and Q&A, and a clean, modern design.",
        techStack: ["React", "HTML", "CSS", "Node.js", "Express.js", "OpenAI API"],
        githubLink: "https://github.com/NFord1/The-Portfolio-Website-.git",
        imageUrl: require("../assets/Project Images/Portfolio Website.gif"),
      },
      {
        id: 6,
        title: "Rocket Launch Simulation",
        description: "A simulation of the launch of a rocket into low Earth orbit using a variable mass system. The program models the dynamics of the rocket, with key variables such as velocity, acceleration, and trajectory calculated and plotted to analyse the rocket’s behavior throughout the launch.",
        techStack: ["MATLAB"],
        githubLink: "https://github.com/NFord1/Rocket-Launch-Simulation.git",
        imageUrl: require("../assets/Project Images/Rocket Launch Simulation.png"),
      },
      {
        id: 7,
        title: "Expense Tracker",
        description: "This app enables users to record, view, update, and delete expense entries. Built using the MVC architecture, it efficiently manages data flow between the database, backend logic, and frontend UI. Users can log expenses by date, assign categories, mark essential items, and view expense histories.",
        techStack: ["React", "Express.js", "Node.js", "PostgreSQL"],
        githubLink: "https://github.com/NFord1/Expense-Tracker.git",
        imageUrl: require("../assets/Project Images/Expense Tracker.png"),
      },
      {
        id: 8,
        title: "Colour-based Object Detector",
        description: "This C program detects objects in Bitmap images based on calibrated colour profiles using the HSV colour space. The program provides functionality for both object detection based on pre-calibrated colour profiles and colour-profile calibration from sample images for future detections.",
        techStack: ["C"],
        githubLink: "https://github.com/NFord1/Colour-based-Object-Detector.git",
        imageUrl: require("../assets/Project Images/Colour-based Object Detector.png"),
      },
      {
        id: 9,
        title: "Clustering",
        description: "This project implements a clustering algorithm to separate a dataset of height and weight measurements into male and female clusters. The project uses an iterative process to calculate distances, assign data points to clusters, and update centroids until convergence.",
        techStack: ["Python"],
        githubLink: "https://github.com/NFord1/Clustering-Project.git",
        imageUrl: require("../assets/Project Images/Clustering.png"),
      },
      {
        id: 10,
        title: "Automatic Shop Assistant",
        description: "An automated system that uses sensors to monitor shelf stock levels and detect customer gestures. The system employs a magnetometer, Lidar sensor, and custom algorithms to align with shelves, calibrate distance, and identify hand gestures, allowing shoppers to view product information without touching items.",
        techStack: ["C", "CodeWarrior IDE", "Magnetometer", "Lidar Sensor", "Servo Motors"],
        githubLink: "https://github.com/NFord1/Automated-Shop-Assistant.git",
        imageUrl: require("../assets/Project Images/Automatic Shop Assistant.png"),
      },
];

// Functional component to display projects
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