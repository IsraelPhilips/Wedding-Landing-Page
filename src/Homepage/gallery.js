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
import Fif from '../images/15.jpg';
import Sev from '../images/17.jpg';
import Ei from '../images/18.jpg';

import Prop1 from '../images/prop2.jpg';
import Prop2 from '../images/prop3.jpg';

import Mar from '../images/married.jpg';
import Mar2 from '../images/married2.jpg';
import Mar3 from '../images/married3.jpg';

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollAnimation from 'react-animate-on-scroll';

function Gallery() {

  const images = [
    {
      original: Prop1,
      thumbnail: Prop1,
    },
    {
      original: Prop2,
      thumbnail: Prop2,
    },
    {
      original: O,
      thumbnail: O,
    },
    {
      original: Th,
      thumbnail: Th,
    },
    {
      original: Ten,
      thumbnail: Ten,
    },
    {
      original: El,
      thumbnail: El,
    },  
    {
      original: Tw,
      thumbnail: Tw,
    }, 
    {
        original: N,
        thumbnail: N,
    },  
    {
        original: Ei,
        thumbnail: Ei,
    },  
    {
      original: Se,
      thumbnail: Se,
    },
    {
      original: Fif,
      thumbnail: Fif,
    },
    {
      original: Sev,
      thumbnail: Sev,
    },    
  ];


  return (
    <div className="gallery">
      <div className='love-text'>
            <h1>Gallery</h1>
        </div>
      <ImageGallery items={images} slideDuration={225} autoPlay={true} showFullscreenButton={false} showPlayButton={false} showNav={false} />
    </div>
  );
}

export default Gallery;
