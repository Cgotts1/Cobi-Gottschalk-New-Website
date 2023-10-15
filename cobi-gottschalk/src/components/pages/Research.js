import React, { useState } from 'react';

import disertationFinal from "../../documents/Dissertation-Final.pdf";
import disertationFinalImage from "../../images/dissertation-final.jpg";
import { BsInfoCircleFill } from 'react-icons/bs';
// import { BiPeople } from 'react-icons/bi'; 
import { BiUser } from 'react-icons/bi';

import { FaUser } from 'react-icons/fa';

import { FaGithub } from 'react-icons/fa';
import { researchProjects } from '../../researchData';




export default function Research({ currentPage, handlePageChange }) {



    const [selectedProjectType, setSelectedProjectType] = useState('All Projects');
    const [isVisible, setIsVisible] = useState(Array(researchProjects.length).fill(false));

    const [isContributorsVisible, setIsContributorsVisible] = useState(Array(researchProjects.length).fill(false));



  
    const handleClick = (projectType) => {
      setSelectedProjectType(projectType);
    };
  
  
  
    const toggleVisibility = (index) => {
      const updatedVisibility = [...isVisible];
      updatedVisibility[index] = !updatedVisibility[index];
      setIsVisible(updatedVisibility);
  
    };
  


    const toggleContributorsVisibility = (index) => {
      const updatedVisibility = [...isContributorsVisible];
      updatedVisibility[index] = !updatedVisibility[index];
      setIsContributorsVisible(updatedVisibility);
    };








  return (
    
    <div className="fadeIn">

        <h1 className='research-h1'>Anthropology</h1>
 
<ul className='coding-ul'>
        <li onClick={() => handleClick('All Projects')}>All Research</li>
        <li onClick={() => handleClick('Archaeology')}>Archaeology</li>
        <li onClick={() => handleClick('Forensic')}>Forensic</li>
        {/* <li onClick={() => handleClick('Cultural')}>Cultural</li> */}
      </ul>


 
  




<div className="projects-container">
        {researchProjects.map((researchProject, index) => {
          if (selectedProjectType === 'All Projects' || selectedProjectType === researchProject.projectType) {
            return (
              <div className="research-container fadeIn" key={index}>
                <h3 className="research-name-overlay">{researchProject.projectName}</h3>
                <a href={researchProject.projectGitHub} target="_blank">
                  {/* <FaGithub className="research-github-overlay" size={44} color="black" /> */}
                  {/* <BiUser className="research-github-overlay" size={44} color="black" /> */}
                  <svg onClick={() => toggleContributorsVisibility(index)}  xmlns="http://www.w3.org/2000/svg" size={44} fill="currentColor" class="bi bi-people-fill research-github-overlay" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
</svg>
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
            {isContributorsVisible[index] && <div className="research-summary-overlay fade-in">{researchProject.projectContributers}</div>}


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