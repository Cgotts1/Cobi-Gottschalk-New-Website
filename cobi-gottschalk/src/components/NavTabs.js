import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (

    <div>

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
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'navigation-link active' : 'navigation-link'}
        >
          Resume
        </a>
      </li>
      <li className="navigation-item navigation-contact">
        <a
          href="#contact"
          // style={{color: "black"}}
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'navigation-link active' : 'navigation-link'}
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