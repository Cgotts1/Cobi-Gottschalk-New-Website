
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { BsInfoCircleFill } from 'react-icons/bs';
import { projects } from '../../projectData';

const Coding = () => {
  const [selectedProjectType, setSelectedProjectType] = useState('All Projects');
  const [isVisible, setIsVisible] = useState(Array(projects.length).fill(false));

  const handleClick = (projectType) => {
    setSelectedProjectType(projectType);
  };



  const toggleVisibility = (index) => {
    const updatedVisibility = [...isVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setIsVisible(updatedVisibility);

  };




  return (
    <div className="portfolio-container fadeIn">
      <ul className='coding-ul'>
        <li onClick={() => handleClick('All Projects')}>All Projects</li>
        <li onClick={() => handleClick('Front End')}>Front End</li>
        <li onClick={() => handleClick('Back End')}>Back End</li>
        <li onClick={() => handleClick('Full Stack')}>Full Stack</li>
      </ul>

      <div className="projects-container">
        {projects.map((project, index) => {
          if (selectedProjectType === 'All Projects' || selectedProjectType === project.projectType) {
            return (
              <div className="project-container fadeIn" key={index}>
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
                {/* Add the project summary and tech info here */}
            {isVisible[index] && <div className="project-summary-overlay fade-in">{project.projectSummary}</div>}


                <p className="project-tech-overlay">{project.projectTech}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Coding;