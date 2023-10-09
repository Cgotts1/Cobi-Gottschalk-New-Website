import React, { useState } from 'react';
import NavTabs from './NavTabs';
import NavTabsSecondary from './NavTabsSecondary';
import NavTabsMobile from './NavTabsMobile';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './Footer';
import Hero from './Hero';
import Education from "./pages/Education";
import ScrollToTopButton from './ScrollToTopButton';





export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Education') {
      return <Education />;
    }
    return <Contact />;
  };

  

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='portfolio-container-component'>
      <ScrollToTopButton /> {/* Render the ScrollToTopButton */}
      {/* <Video /> */}
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      <div className='secondary-nav-and-hero'>
      <NavTabsSecondary currentPage={currentPage} handlePageChange={handlePageChange} />
      <Hero/>
      </div>
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}
