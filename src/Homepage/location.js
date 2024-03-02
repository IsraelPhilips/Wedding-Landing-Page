import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import Church from '../images/church.png';
import Map from '../images/map.png';


function Location() {

  return (
    <AnimationOnScroll  animateIn="fadeIn" animateOut="fadeOut" duration=".6" >
    <div className="location" id="location">
        <div className='love-text'>
            <h1>Location</h1><img src={Church} />
        </div>
        <div className="address">
            <img src={Map} />
            <h2>SLC Auditorium, Former Fun Factory, Oshuntokun Avenue, 200285, Ibadan, Nigeria.</h2>
        </div>
    </div>
    </AnimationOnScroll>
  );
}

export default Location;
