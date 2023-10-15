import React from 'react';
import cv from "./pages/Tech-CV.pdf";

function NavTabs({ currentPage, handlePageChange }) {
  return (

    <div className='sticky-nav'>

    <ul className="navigation navigation-tabs">  
<h2 className='first-name'>Cobi <br></br>Gottschalk</h2>

      {/* <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li> */}
      {/* <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li> */}

      <div className='resume-contact'>
      <li className="navigation-item navigation-resume">
        <a
          // href="#resume"
          href={cv}
          target="_blank" rel="noopener noreferrer"
          // onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'navigation-link active' : 'navigation-link'}
        >
          Resume
        </a>
      </li>
      <li className="navigation-item navigation-contact">
      {/* <li  className={currentPage === 'Contact' ? ' navigation-item navigation-contact-border-none' : 'navigation-link navigation-contact'}> */}
        <a
          href="#contact"
          // style={{color: "black"}}
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'navigation-link navigation-contact-active' : 'navigation-link'}
        >
          Contact
        </a>
      </li>

      </div>
    </ul>

    


  </div>
  );
}

export default NavTabs;