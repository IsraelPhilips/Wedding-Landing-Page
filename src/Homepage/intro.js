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


  return (
    <div className="" style={{marginTop: "20px"}}>
      <ImageGallery items={images} autoPlay={true} showFullscreenButton={false} showPlayButton={false} showNav={false} />
    </div>
  );
}

export default Intro;
