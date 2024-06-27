import React, { useState } from 'react';
import Teaching from "./Teaching";
import RealEstate from "./RealEstate";
import Coding from "./Coding";
import Research from "./Research";
import Photography from "./Photography";

export default function Portfolio() {
  const [isTeachingVisible, setIsTeachingVisible] = useState(false);
  const [isCodingVisible, setIsCodingVisible] = useState(true);
  const [isRealEstateVisible, setIsRealEstateVisible] = useState(false);
  const [isResearchVisible, setIsResearchVisible] = useState(false);
  const [isPhotographyVisible, setIsPhotographyVisible] = useState(false);

  const showCoding = () => {
    setIsCodingVisible(true);
    setIsTeachingVisible(false);
    setIsRealEstateVisible(false);
    setIsResearchVisible(false);
    setIsPhotographyVisible(false);

  };

  const showTeaching = () => {
    setIsCodingVisible(false);
    setIsTeachingVisible(true);
    setIsRealEstateVisible(false);
    setIsResearchVisible(false);
    setIsPhotographyVisible(false);

  };

  const showRealEstate = () => {
    setIsCodingVisible(false);
    setIsTeachingVisible(false);
    setIsRealEstateVisible(true);
    setIsResearchVisible(false);
    setIsPhotographyVisible(false);

  };

  const showResearch = () => {
    setIsCodingVisible(false);
    setIsTeachingVisible(false);
    setIsRealEstateVisible(false);
    setIsResearchVisible(true);
    setIsPhotographyVisible(false);

  };

  const showPhotography = () => {
    setIsCodingVisible(false);
    setIsTeachingVisible(false);
    setIsRealEstateVisible(false);
    setIsResearchVisible(false);
    setIsPhotographyVisible(true);
  };

  return (
    <div className="portfolio-container fadeIn">
      <ul className='portfolio-nav'>
        <li className={isCodingVisible ? 'portfolio-nav-active' : ''} onClick={showCoding}>Coding</li>
        <li className={isTeachingVisible ? 'portfolio-nav-active' : ''} onClick={showTeaching}>Teaching</li>
        <li className={isRealEstateVisible ? 'portfolio-nav-active' : ''} onClick={showRealEstate}>Real Estate</li>
        <li className={isResearchVisible ? 'portfolio-nav-active' : ''} onClick={showResearch}>Anthropology</li>
        <li className={isPhotographyVisible ? 'portfolio-nav-active' : ''} onClick={showPhotography}>Photography</li>
      </ul>

      {isCodingVisible && <Coding />}
      {isTeachingVisible && <Teaching />}
      {isRealEstateVisible && <RealEstate />}
      {isResearchVisible && <Research />}
      {isPhotographyVisible && <Photography />}
    </div>
  );
};