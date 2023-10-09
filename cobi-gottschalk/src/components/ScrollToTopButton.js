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
        <svg xmlns="http://www.w3.org/2000/svg" style={{marginTop: "-3px"}} width="30px" height="30px" fill="black" class="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
</svg>
      </div>
    );
  }