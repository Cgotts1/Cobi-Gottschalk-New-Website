import React from 'react';

function NavTabsMobile({ currentPage, handlePageChange }) {
  return (

// added div to contain header div
    <div className='mobile-nav-component'>

    <ul className="nav-link">  
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'mobile-nav-link active' : 'mobile-nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'mobile-nav-link active' : 'mobile-nav-link'}
        >
          Portfolio
        </a>
      </li>  
      <li className="nav-item">
        <a
          href="#education"
          onClick={() => handlePageChange('Education')}
          className={currentPage === 'Education' ? 'mobile-nav-link active' : 'mobile-nav-link'}
        >
          Education
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#education"
          onClick={() => handlePageChange('Education')}
          className={currentPage === 'Education' ? 'secondary-nav-link active' : 'secondary-nav-link'}
        >
          Education
        </a>
      </li>

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
     
    </ul>
  </div>
  );
}

export default NavTabsMobile;