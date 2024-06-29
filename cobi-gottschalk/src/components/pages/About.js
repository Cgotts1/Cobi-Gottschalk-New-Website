
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
        <li
          onClick={() => handleListItemClick("csun-div", "CSUN")}
          className={activeListItem === "CSUN" ? "portfolio-nav-active" : ""}
        >
          Background
        </li>
     
        <li
          onClick={() => handleListItemClick("ucsd-div", "UCSD")}
          className={activeListItem === "UCSD" ? "portfolio-nav-active" : ""}
        >
          Services
        </li>
    
      </ul>

      <div className={`csun-div ${activeDiv === "csun-div" ? "" : "hide"}`}>
       

        <div className="container-right-left fadeIn">
          <section className="left-section-one"></section>


          <section
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="right-section-one"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: 20,
                opacity: 1,
                backgroundColor: "white",
              }}
              className="left-container-one"
            >
              <p>
             
                With a strong foundation in forensic anthropology and a passion
                for research, I've dedicated my academic journey to
                understanding the complexities of human remains and the science
                of decomposition. My journey started with a Bachelor's degree in
                anthropology and continued with a Master's in Forensic
                Anthropology from Liverpool John Moores University. I've
                conducted extensive research projects such as investigating size
                correlations between the acetabulum and proximal femora as well as
                examining pollen retention on articles of clothing. Furthermore,
                my enthusiasm for learning led me to explore the world of
                software development, and I successfully completed a full-stack
                coding bootcamp. Alongside this, my experience as a high school
                art instructor has honed my communication skills and my ability
                to convey complex ideas to diverse audiences. Now, I'm excited
                to combine my unique background and diverse skill set to make
                meaningful contributions in both the academic and tech-related
                fields.
              </p>
            </div>
          </section>
        </div>
      </div>


      <div className={`ucsd-div ${activeDiv === "ucsd-div" ? "" : "hide"}`}>
       

        <div className="container-right-left fadeIn">
          <section className="left-section-one"></section>

        
          <section
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="right-section-one"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: 20,
                opacity: 1,
                backgroundColor: "white",
              }}
              className="left-container-one"
            >
              <p>
                Beyond my professional pursuits, I am deeply passionate about
                music, with a special love for playing the piano and guitar.
                These instruments have been my creative outlets for over 10 years now.
                Whether I'm learning a new song
                or just plucking away at random
                strings on my guitar, music
                has provided me with a unique avenue for self-expression and
                emotional release. It has been been a consistent source
                of inspiration that fuels my creativity and enriches my life.
                
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
