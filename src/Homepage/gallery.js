import ImageGallery from "react-image-gallery";
import { Gallery } from "react-grid-gallery";
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

import Pre1 from '../images/pre1.jpg';
import Pre2 from '../images/pre2.jpg';
import Pre3 from '../images/pre3.jpg';

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollAnimation from 'react-animate-on-scroll';

function FullGallery() {

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
    
  ];

  const imagesSecond = [
    {
       src: Pre1,
       width: 320,
       height: 374,
       caption: "After Rain (Jeshu John - designerspics.com)",
       alt: "Pre Wedding Shoots",
    },
    {
       src: Pre2,
       width: 320,
       height: 412,
       alt: "Pre Wedding Shoots",
    },
    {
       src: Pre3,
       width: 320,
       height: 412,
       alt: "Pre Wedding Shoots",
    },
 ];
 


  return (
    <>
    <div className="gallery">
      <div className='love-text extra-gll'>
            <h1>Couple's Gallery</h1>
        </div>
      <ImageGallery items={images} slideDuration={225} autoPlay={true} showFullscreenButton={false} showPlayButton={false} showNav={false} />
    </div>
    <div className="spgrid">
      <Gallery style={{display: 'flex', margin: 'auto !important'}} className="spgrid-img" images={imagesSecond} />
    </div>
    </>
  );
}

export default FullGallery;
