import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { BsInfoCircleFill } from 'react-icons/bs';
import { projects } from '../../projectData';

// import { FaGithub } from 'react-icons/fa5';
// import { BsInfoCircleFill } from 'react-icons/bs'; 

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(Array(projects.length).fill(false));

  const toggleVisibility = (index) => {
    const updatedVisibility = [...isVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setIsVisible(updatedVisibility);
  };

  return (
    <div className="portfolio-container fadeIn">
      <div className="recent-work-container">
        <h1 className="contact-me-container recent-work"></h1>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-container" key={index}>
            <h3 className="project-name-overlay">{project.projectName}</h3>
            <a href={project.projectGitHub} target="_blank">
              <FaGithub className="project-github-overlay" size={44} color="black" />
            </a>
            <BsInfoCircleFill
              onClick={() => toggleVisibility(index)} // Pass the index to the toggleVisibility function
              className="project-information-overlay"
              size={44}
              color="blue"
            />
            <a href={project.projectSite} target="_blank">
              <img className="project-image" src={project.projectImage} alt={project.projectName} />
            </a>
            {isVisible[index] && <div className="project-summary-overlay fade-in">{project.projectSummary}</div>}
            <p className="project-tech-overlay">{project.projectTech}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;