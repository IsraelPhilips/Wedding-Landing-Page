import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import Church from '../images/church.png';
import Map from '../images/map.png';
import Clock from '../images/clock.png';


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
            <h2>SLC Auditorium, <br />Former Fun Factory, <br />Oshuntokun Avenue, Bodija, 200285, <br />Ibadan, Nigeria.</h2>
        </div>
        </div>
        
        <div className="location-inside" style={{marginTop: '25px', background: '#f8c058d9'}}>
          <div className='love-text'>
              <h1>Date & Time</h1>
          </div>
          <div className="address" style={{alignItems: 'center'}}>
              {/* <img src={Map} /> */}
              <h2 style={{fontWeight: '500'}}>April 13, 2024</h2>
              <h2>10am</h2>
          </div>
        </div>
    </div>
    </AnimationOnScroll>
  );
}

export default Location;
