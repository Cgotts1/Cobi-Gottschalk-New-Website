// import React from "react";
// import image5 from "../../images/image5.jpg";

// export default function About() {
//   return (

//     <div>
//     <div className="about-component-container fadeIn">
//       {/* <h2>Hello there!</h2> */}

//       {/* <ul className='coding-ul'> */}
//       <ul className='portfolio-nav'>
//         <li >Background</li>
//         <li >Work</li>
//         <li >Interests</li>
//       </ul>

//       </div>
      
//       <div className="about-component fadeIn">

//       {/* <section>
//         <p>
//           With a Master of Science degree in forensic anthropology from
//           Liverpool John Moores University and a Bachelor of Arts degree in
//           anthropology from California State University, Northridge, my
//           educational background in anthropology is well-rounded. I have
//           expertise in both qualitative and quantitative research methods.
//           Furthermore, I have expanded my skill set through a comprehensive full
//           stack coding bootcamp at UCSD, where I gained practical experience and
//           sharpened my abilities in software development and web applications.
//         </p>

//         <p>
//           During my time at the bootcamp, I learned how to build responsive and
//           user-friendly web applications, as well as how to collaborate with
//           other developers using Git version control. Drawing from my previous
//           experience as a high school art teacher, I also applied my insights
//           into user experience (UX) and user interface (UI) design principles to
//           develop web applications with intuitive and visually appealing
//           interfaces, ensuring a seamless experience for end-users. I gained
//           hands-on experience with various programming languages such as HTML,
//           CSS, and JavaScript, and became proficient in using the MERN (MongoDB,
//           Express, React, Node.js) stack, which is widely used in modern web
//           development. Overall, my combination of skills in anthropology and
//           software development make me a well-rounded and versatile candidate
//           for a variety of roles in both fields.
//         </p>
//       </section> */}

//       <section className="left-section-one">


//         <section className="left-inside-section-one">
//         <p style={{ padding: "20px" }}>
//           {/* "I hold a Master of Science in forensic anthropology from Liverpool
//           John Moores University and a Bachelor of Arts in anthropology from
//           California State University, Northridge. My expertise spans
//           qualitative and quantitative research methods, and I've honed my
//           software development skills through a comprehensive full-stack coding
//           bootcamp at UCSD. With experience in building responsive,
//           user-friendly web applications and proficiency in programming
//           languages like HTML, CSS, and JavaScript, I offer a versatile skill
//           set that bridges anthropology and software development for a wide
//           range of roles." */}
//     <i class="bi bi-arrow-up-square"></i>

//         </p>
//         </section>

//         <section className="right-inside-section-one">
//         <p style={{ padding: "20px" }}>
//           {/* "I hold a Master of Science in forensic anthropology from Liverpool
//           John Moores University and a Bachelor of Arts in anthropology from
//           California State University, Northridge. My expertise spans
//           qualitative and quantitative research methods, and I've honed my
//           software development skills through a comprehensive full-stack coding
//           bootcamp at UCSD. With experience in building responsive,
//           user-friendly web applications and proficiency in programming
//           languages like HTML, CSS, and JavaScript, I offer a versatile skill
//           set that bridges anthropology and software development for a wide
//           range of roles." */}
//         </p>
//         </section>
//       </section>
//       <section className="right-section-one">
//         <p style={{ color: "white", padding: "20px" }}>
//           {/* During my time at the bootcamp, I learned how to build responsive and
//           user-friendly web applications, as well as how to collaborate with
//           other developers using Git version control. Drawing from my previous
//           experience as a high school art teacher, I also applied my insights
//           into user experience (UX) and user interface (UI) design principles to
//           develop web applications with intuitive and visually appealing
//           interfaces, ensuring a seamless experience for end-users. I gained
//           hands-on experience with various programming languages such as HTML,
//           CSS, and JavaScript, and became proficient in using the MERN (MongoDB,
//           Express, React, Node.js) stack, which is widely used in modern web
//           development. Overall, my combination of skills in anthropology and
//           software development make me a well-rounded and versatile candidate
//           for a variety of roles in both fields. */}
//            "I hold a Master of Science in forensic anthropology from Liverpool
//           John Moores University and a Bachelor of Arts in anthropology from
//           California State University, Northridge. My expertise spans
//           qualitative and quantitative research methods, and I've honed my
//           software development skills through a comprehensive full-stack coding
//           bootcamp at UCSD. With experience in building responsive,
//           user-friendly web applications and proficiency in programming
//           languages like HTML, CSS, and JavaScript, I offer a versatile skill
//           set that bridges anthropology and software development for a wide
//           range of roles."
//         </p>
//       </section>
//     </div>
//     </div>
//   );
// }
















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
          className={activeListItem === "CSUN" ? "portfolio-nav-active" : ""}>Background</li>
        <li onClick={() => handleListItemClick("ljmu-div", "LJMU")}
          className={activeListItem === "LJMU" ? "portfolio-nav-active" : ""}>Experience</li>
        <li onClick={() => handleListItemClick("ucsd-div", "UCSD")}
          className={activeListItem === "UCSD" ? "portfolio-nav-active" : ""}>Interests</li>
        {/* <li>Awards</li> */}
      </ul>

      <div className={`csun-div ${activeDiv === "csun-div" ? "" : "hide"}`}>
        {/* <h1 className="csun-h1 fadeIn">California State University, Northridge</h1> */}

        <div className="container-right-left fadeIn">
          {/* <section className="education-left-section-one csun-image">
            <div className="left-container-one">
                   <p>
           With a Master of Science degree in forensic anthropology from
           Liverpool John Moores University and a Bachelor of Arts degree in
          anthropology from California State University, Northridge, my
          educational background in anthropology is well-rounded. I have
           expertise in both qualitative and quantitative research methods.
           Furthermore, I have expanded my skill set through a comprehensive full
           stack coding bootcamp at UCSD, where I gained practical experience and
           sharpened my abilities in software development and web applications.
         </p>
            </div>
          </section> */}

          <section className="left-section-one"></section>

          {/* <section className="education-right-section-one"> */}
          <section className="right-section-one">
          <div className="left-container-one">
                   <p>
           With a Master of Science degree in forensic anthropology from
           Liverpool John Moores University and a Bachelor of Arts degree in
          anthropology from California State University, Northridge, my
          educational background in anthropology is well-rounded. I have
           expertise in both qualitative and quantitative research methods.
           Furthermore, I have expanded my skill set through a comprehensive full
           stack coding bootcamp at UCSD, where I gained practical experience and
           sharpened my abilities in software development and web applications.
         </p>
            </div>
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