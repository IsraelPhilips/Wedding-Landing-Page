import ImageGallery from "react-image-gallery";


import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import Gift from '../images/gift.png';

import Call from '../images/phone-call.png';
import Mail from '../images/mail.png';

function Give() {

  return (
    <>
        <div className="give" id="give">
            <div className='love-text' id="location">
                <h1>Give</h1><img src={Gift} />
            </div>
            <div className="account">
                <p>Send in your cash gifts to the account details below:</p>
                <h2><strong>Account Details:</strong> <br /> Account Number: 7066312093 <br /> Account Name: Apara Tunmise <br />Bank: Opay </h2>
            </div>
        </div>

        <div className="footer" id="footer">
            <div className='nav-title'>
                <p>Grace & Tunmise</p>
            </div>
            <div className="account">
                <div className="icons">
                    <a href="tel:+2347066312093"><img src={Call} /></a>
                    <a href="mailto:israelphilipsdev@gmail.com"><img src={Mail} /></a>
                </div>
                <p className="copy">Copyright © 2024 Grace & Tunmise. <br />All Rights Reserved.</p>
            </div>
        </div>
    </>
  );
}

export default Give;
