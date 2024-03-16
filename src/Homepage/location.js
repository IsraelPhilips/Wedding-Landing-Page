import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import Church from '../images/church.png';
import Map from '../images/map.png';


function Location() {

  return (
    <AnimationOnScroll  animateIn="fadeIn" animateOut="fadeOut" duration=".6" >
    <div className="location" id="location">
      <div className="location-inside">
        <div className='love-text'>
            <h1>Location</h1><img src={Map} />
        </div>
        <div className="address">
            {/* <img src={Map} /> */}
            <h2 style={{fontWeight: '500'}}>The wedding and reception would be taking place at:</h2><br />
            <h2>SLC Auditorium, <br />Former Fun Factory, <br />Oshuntokun Avenue, 200285, <br />Ibadan, Nigeria.</h2>
        </div>
        </div>
    </div>
    </AnimationOnScroll>
  );
}

export default Location;
