import ImageGallery from "react-image-gallery";
import O from '../images/1.jpg';
import T from '../images/2.jpg';
import Th from '../images/3.jpg';
import F from '../images/4.jpg';
import Fi from '../images/5.jpg';
import S from '../images/6.jpg';
import Se from '../images/7.jpg';
import E from '../images/8.jpg';
import N from '../images/9.jpg';
import Ten from '../images/10.jpg';
import El from '../images/11.jpg';
import Tw from '../images/12.jpg';
import Thi from '../images/13.jpg';
import Fo from '../images/14.jpg';

import Mar from '../images/married.jpg';
import Mar2 from '../images/married2.jpg';
import Mar3 from '../images/married3.jpg';

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollAnimation from 'react-animate-on-scroll';

import Countdown from 'react-countdown';


function Intro() {

  const images = [
    {
      original: Fi,
      thumbnail: Fi,
    },
    {
      original: S,
      thumbnail: S,
    },
    
  ];

  const futureDate = new Date(2024, 3, 13); // Months are zero-indexed (0 = January, 1 = February, ..., 3 = April)

  // Convert the futureDate to a timestamp
  const futureTimestamp = futureDate.getTime();

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="count-down">
      <span className="days">
        <div>{days}</div>
        <p>Days</p>
      </span>
      <span className="hours">
        <div>{hours}</div>
        <p>Hours</p>
      </span>
      <span className="minutes">
        <div>{minutes}</div>
        <p>Minutes</p>
      </span>
      <span className="secs">
        <div>{seconds}</div>
        <p>Seconds</p>
      </span>
    </div>
  );

  return (
    <div className="intro">
      {/* <ImageGallery items={images} autoPlay={true} showFullscreenButton={false} showPlayButton={false} showNav={false} /> */}
      {/* <div className="intro-text">
        <h1>We are Getting Married!</h1>
      </div>

      <div className="intro-img">
        <img src={Se} />
      </div> */}
      {/* <AnimationOnScroll animateIn="fadeIn" animateOut="fadeOut" duration=".2" className="bg-img"> */}
        <div className="bg-img">
          <img src={Mar2} />
        </div>
      {/* </AnimationOnScroll> */}

      <div className="intro-text">
        <h2>We are Getting Married!</h2>
        <h1>Grace & Tunmise</h1>
        <p>April 13, 2024.</p>
      </div>

      <div className="count">
        <Countdown date='2024-04-13T00:00:00' renderer={renderer} />
      </div>
    </div>
  );
}

export default Intro;
