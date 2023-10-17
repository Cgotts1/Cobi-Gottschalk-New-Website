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
          <section className="education-right-section-one">
            <img class="school-logos" src={ljmu} />
          </section>
        </div>
      </div>

      <div className={`ucsd-div ${activeDiv === "ucsd-div" ? "" : "hide"}`}>
        <h1 className="ucsd-h1 fadeIn">University of California, San Diego</h1>

        <div className="container-right-left fadeIn">
          <section className="education-left-section-one ucsd-image">
            <div className="left-container-one">
              <h1>Full Stack Coding Certificate</h1>
              <h2>Cumulative 100.05%</h2>
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