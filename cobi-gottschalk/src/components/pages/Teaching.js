import React from "react";



export default function Teaching({ currentPage, handlePageChange }) {
  return (
    
    <div className="fadeIn">
      <ul className='coding-ul'>
        {/* <li onClick={() => handleClick('All Projects')}>All Projects</li>
        <li onClick={() => handleClick('Front End')}>Front End</li>
        <li onClick={() => handleClick('Back End')}>Back End</li>
        <li onClick={() => handleClick('Full Stack')}>Full Stack</li> */}


        <li >Google Classroom</li>
        <li >Student Work</li>
        <li >Assignments</li>
      </ul>
 
    </div>
  );
}