import React, { useState } from "react";

import csun from "../../images/csun-logo.png";
import ljmu from "../../images/ljmu-logo.png";
import ucsd from "../../images/ucsd-logo.png";

export default function Education({ currentPage, handlePageChange }) {

  // State to keep track of the active div and active list item
  const [activeDiv, setActiveDiv] = useState("csun-div");
  const [activeListItem, setActiveListItem] = useState("CSUN");

  // Function to handle the click event on list items
  const handleListItemClick = (divId, listItem) => {
    setActiveDiv(divId);
    setActiveListItem(listItem);
  };



  

  return (
    <div className="fadeIn">
      <ul className="portfolio-nav">
        <li  onClick={() => handleListItemClick("csun-div", "CSUN")}
          className={activeListItem === "CSUN" ? "portfolio-nav-active" : ""}>CSUN</li>
        <li onClick={() => handleListItemClick("ljmu-div", "LJMU")}
          className={activeListItem === "LJMU" ? "portfolio-nav-active" : ""}>LJMU</li>
        <li onClick={() => handleListItemClick("ucsd-div", "UCSD")}
          className={activeListItem === "UCSD" ? "portfolio-nav-active" : ""}>UCSD</li>
        {/* <li>Awards</li> */}
      </ul>

      <div className={`csun-div ${activeDiv === "csun-div" ? "" : "hide"}`}>
        <h1 className="csun-h1 fadeIn">California State University, Northridge</h1>

        <div className="container-right-left fadeIn">
          <section className="education-left-section-one csun-image">
            <div className="left-container-one">
              <h1>Bachelors of Arts Anthropology</h1>
              <h2>Cumulative GPA 3.42</h2>
              <h3>Graduated 2017</h3>

              <p>Archaeology</p>
              <p>Cultural</p>
              <p>Biological</p>
            </div>
          </section>

          <section className="education-right-section-one">
            <img class="school-logos" src={csun} />
          </section>
        </div>
      </div>

      <div className={`ljmu-div ${activeDiv === "ljmu-div" ? "" : "hide"}`}>
        <h1 className="ljmu-h1 fadeIn">Liverpool John Moores University</h1>

        <div className="container-right-left fadeIn">
          <section className="education-right-section-one">
            <img class="school-logos" src={ljmu} />
          </section>
          <section className="education-left-section-one ljmu-image">
            <div className="left-container-one">
              <h1>Masters of Science Forensic Anthropology</h1>
              <h2>Cumulative GPA 3.67</h2>
              <h3>Graduated 2019</h3>

              <p>Advance Osteology and Skeletal Pathology</p>
              <p>Forensic Research Methods</p>
              <p>Taphonomy and Trauma Analysis</p>
            </div>
          </section>
        </div>
      </div>

      <div className={`ucsd-div ${activeDiv === "ucsd-div" ? "" : "hide"}`}>
        <h1 className="ucsd-h1 fadeIn">University of California, San Diego</h1>

        <div className="container-right-left fadeIn">
          <section className="education-left-section-one ucsd-image">
            <div className="left-container-one">
              <h1>Full Stack Coding Certificate</h1>
              <h2>Cumulative 101.2%</h2>
              <h3>Graduated 2023</h3>

              <p>Javascript</p>
              <p>MySQL</p>
              <p>React</p>
            </div>
          </section>

          <section className="education-right-section-one">
            <img class="school-logos" src={ucsd} />
          </section>
        </div>
      </div>
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

{
  /* <ul className='portfolio-nav'>
            <li className={isCodingVisible ? 'portfolio-nav-active' : ''} onClick={showCoding}>Coding</li>
            <li className={isTeachingVisible ? 'portfolio-nav-active' : ''} onClick={showTeaching}>Teaching</li>
            <li className={isRealEstateVisible ? 'portfolio-nav-active' : ''} onClick={showRealEstate}>Real Estate</li>
            <li className={isResearchVisible ? 'portfolio-nav-active' : ''} onClick={showResearch}>Research</li>
          </ul> */
}

{
  /* <div className="resume-container">
          <h1>My Skills</h1>
          </div>
          
          <div className="cv-container download">
          <h3>Download CV</h3>
        </div> */
}

{
  /* <div className="school-logo-container">
        <img class="school-logos" src={csun}/>
        <img class="school-logos" src={ljmu}/>
        <img class="school-logos" src={ucsd}/>
      </div> */
}
{
  /* <img class="school-logos" src={ljmu}/> */
}
