// import React from 'react';
// import image7 from "./../images/image7.png"



import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import image1 from './../images/color-changer.png';
import image2 from './../images/fitness-plan.png';
import image3 from './../images/gamer-match.png';
import videoBackground from './../images/background-video.mp4';

function Hero({ currentPage, handlePageChange }) {


  return (
    <div className='hero-component'>
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content on top of the video */}
      <div className='hero-content'>
        {/* Your content goes here */}
      </div>
    </div>
  );
}

export default Hero;
















//   return (

//     <div className='hero-component'>
//   </div>
//   );
// }

// export default Hero;

{/* <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
        <div>
          <img style={{width: "", height: "200px"}} src={image1} alt="Image 1" />
        </div>
        <div >
          <img style={{width: "", height: "200px"}}  src={image2} alt="Image 2" />
        </div>
        <div >
          <img style={{width: "", height: "340px"}}  src={image3} alt="Image 3" />
        </div>
      </Carousel> */}




{/* <iframe src="https://giphy.com/embed/gkCgDZHywXa6Y" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p> */}
{/* <iframe src="https://giphy.com/embed/Il9f7ZhytEiI0" width="100%" height="100%" frameBorder="0" class="giphy-embed" style={{userSelect: "none", pointerEvents: "none"}} allowFullScreen></iframe> */}
{/* <h1 style={{color: "white", textAlign: "right"}}>Cobi Gottschalk, here to help solve crimes, improve schools, innovate tech, and take care of your real estate needs!</h1> */}
