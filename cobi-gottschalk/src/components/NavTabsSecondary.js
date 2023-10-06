import React from 'react';

function NavTabsSecondary({ currentPage, handlePageChange }) {
  return (

// added div to contain header div
    <div className='secondary-nav-component'>

    <ul className="nav-link">  
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'secondary-nav-link active' : 'secondary-nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'secondary-nav-link active' : 'secondary-nav-link'}
        >
          Portfolio
        </a>
      </li>  
      <li className="nav-item">
        <a
          href="#education"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'secondary-nav-link active' : 'secondary-nav-link'}
        >
          Education
        </a>
      </li>
      {/* <li className="nav-item nav-contact">
        <a
          href="#contact"
          // style={{color: "black"}}
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'secondary-nav-link'}
        >
          Contact
        </a>
      </li> */}

    </ul>

    


  </div>
  );
}

export default NavTabsSecondary;