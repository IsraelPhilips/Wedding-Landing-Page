import { useEffect, useState } from 'react';

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

import LoveArr from '../images/love-arr.png';
import LoveArro from '../images/love-arro.png';

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollAnimation from 'react-animate-on-scroll';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function FullGallery() {

  const imagesFirst = [
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

  const images = [
    {
       src: Pre1,
       original: Pre1,
       width: 720,
       height: 774,
       alt: "Pre Wedding Shoots",
    },
    {
       src: Pre2,
       original: Pre2,
       width: 520,
       height: 712,
       alt: "Pre Wedding Shoots",
    },
    {
       src: Pre3,
       original: Pre3,
       width: 520,
       height: 412,
       alt: "Pre Wedding Shoots",
    },
 ];
 

 const [index, setIndex] = useState(-1);
 const [open, setOpen] = useState(false);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);


  return (
    <>
    <div className="gallery">
        <div className='gallery-inner'>
          <div className='love-text extra-gll'>
                <h1>Couple's Gallery</h1>
            </div>
          <ImageGallery items={imagesFirst} slideDuration={225} autoPlay={true} showFullscreenButton={false} showPlayButton={false} showNav={false} />
        </div>
      {/* <div className="spgrid">
      
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
        />
        {!!currentImage && (
          
          <Lightbox
            mainSrc={currentImage.original}
            imageTitle={currentImage.caption}
            mainSrcThumbnail={currentImage.src}
            nextSrc={nextImage.original}
            nextSrcThumbnail={nextImage.src}
            prevSrc={prevImage.original}
            prevSrcThumbnail={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </div> */}
      <img className='love-arrow' src={LoveArr} />
      <div onClick={() => setOpen(true)}>
        <div className='fst-grid'>
          <div className='left-side'>
            <img src={Pre1} />
            <img src={Pre3} />
          </div>
          <div className='r-side'>
            <img src={Pre2} />
          </div>
        </div>
        
      </div>
      <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            { src: Pre1 },
            { src: Pre2 },
            { src: Pre3 },
          ]}
        />
      </div>
    </>
  );
}

export default FullGallery;
