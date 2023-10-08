import React, { useState } from 'react';

import disertationFinal from "../../documents/Dissertation-Final.pdf";
import disertationFinalImage from "../../images/dissertation-final.jpg";
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { researchProjects } from '../../researchData';




export default function Research({ currentPage, handlePageChange }) {



    const [selectedProjectType, setSelectedProjectType] = useState('All Projects');
    const [isVisible, setIsVisible] = useState(Array(researchProjects.length).fill(false));
  
    const handleClick = (projectType) => {
      setSelectedProjectType(projectType);
    };
  
  
  
    const toggleVisibility = (index) => {
      const updatedVisibility = [...isVisible];
      updatedVisibility[index] = !updatedVisibility[index];
      setIsVisible(updatedVisibility);
  
    };
  











  return (
    
    <div className="fadeIn">

        <h1 className='research-h1'>Anthropology</h1>
 
<ul className='coding-ul'>
        <li onClick={() => handleClick('All Projects')}>All Research</li>
        <li onClick={() => handleClick('Archaeology')}>Archaeology</li>
        <li onClick={() => handleClick('Forensic')}>Forensic</li>
        <li onClick={() => handleClick('Cultural')}>Cultural</li>
      </ul>







<div className="projects-container">
        {researchProjects.map((researchProject, index) => {
          if (selectedProjectType === 'All Projects' || selectedProjectType === researchProject.projectType) {
            return (
              <div className="research-container fadeIn" key={index}>
                <h3 className="research-name-overlay">{researchProject.projectName}</h3>
                <a href={researchProject.projectGitHub} target="_blank">
                  <FaGithub className="research-github-overlay" size={44} color="black" />
                </a>
                <BsInfoCircleFill
              onClick={() => toggleVisibility(index)} // Pass the index to the toggleVisibility function

                  className="research-information-overlay"
                  size={44}
                  color="blue"
                />
                <a href={researchProject.projectSite} target="_blank" rel="noopener noreferrer">
                  <img className="research-image" src={researchProject.projectImage} alt={researchProject.projectName} />
                </a>
                {/* Add the project summary and tech info here */}
            {isVisible[index] && <div className="research-summary-overlay fade-in">{researchProject.projectSummary}</div>}


                <p className="research-tech-overlay">{researchProject.projectTech}</p>
              </div>
            );
          }
          return null;
        })}
      </div>














{/* <a href={disertationFinal} download title="download">
        
          <img className="research-image" src={disertationFinalImage}></img>
        </a> */}
      


    </div>
  );
}