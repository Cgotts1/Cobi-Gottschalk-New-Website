import React from "react";

import csun from "../../images/csun-logo.png";
import ljmu from "../../images/ljmu-logo.png";
import ucsd from "../../images/ucsd-logo.png";


export default function Education({ currentPage, handlePageChange }) {
  return (
    
    <div className="fadeIn">



<ul className='portfolio-nav'>
        <li >CSUN</li>
        <li >LJMU</li>
        <li>UCSD</li>
        <li >Awards</li>
      </ul>



<div className="container-right-left">

      <section className="left-section-one">
      <img class="school-logos" src={ucsd}/>
      <img class="school-logos" src={csun}/>
            <img class="school-logos" src={ljmu}/>

</section>


<section className="right-section-one">
  {/* <h1>Please feel free to reach out!</h1> */}
  <img class="school-logos" src={ucsd}/>
  <img class="school-logos" src={csun}/>
            <img class="school-logos" src={ljmu}/>

</section>

</div>


      {/* <ul className='portfolio-nav'>
        <li className={isCodingVisible ? 'portfolio-nav-active' : ''} onClick={showCoding}>Coding</li>
        <li className={isTeachingVisible ? 'portfolio-nav-active' : ''} onClick={showTeaching}>Teaching</li>
        <li className={isRealEstateVisible ? 'portfolio-nav-active' : ''} onClick={showRealEstate}>Real Estate</li>
        <li className={isResearchVisible ? 'portfolio-nav-active' : ''} onClick={showResearch}>Research</li>
      </ul> */}




      {/* <div className="resume-container">
        <h1>My Skills</h1>
      </div>

      <div className="cv-container download">
        <h3>Download CV</h3>
      </div> */}

     

            {/* <div className="school-logo-container">
            <img class="school-logos" src={csun}/>
            <img class="school-logos" src={ljmu}/>
            <img class="school-logos" src={ucsd}/>
            </div> */}
    </div>
  );
}











// import React, { useState } from "react";

// export default function Education({ currentPage, handlePageChange }) {
//   const [heroImageClass, setHeroImageClass] = useState("hero-portfolio");

//   // Function to change the hero image class when the page changes
//   const handleHeroImageChange = (page) => {
//     if (page === "Resume") {
//       setHeroImageClass("hero-education");
//     } else {
//       setHeroImageClass("hero-portfolio");
//     }
//   };

//   // Call the function when the page changes
//   React.useEffect(() => {
//     handleHeroImageChange(currentPage);
//   }, [currentPage]);

//   return (
//     <div className={`fadeIn resume-page ${heroImageClass}`}>
//       {/* ... rest of your component */}
//     </div>
//   );
// }