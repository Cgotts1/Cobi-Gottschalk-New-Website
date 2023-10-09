import React, { useState, useEffect } from 'react';


export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
  
    // Add a scroll event listener to check if the user has scrolled past a certain point
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100  && window.innerWidth < 576) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <div
        className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        style={{ color: 'black' }}
      >
        🡹
      </div>
    );
  }