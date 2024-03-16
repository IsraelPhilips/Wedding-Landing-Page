import ImageGallery from "react-image-gallery";


import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import Gift from '../images/gift.png';
import Hearts from '../images/hearts.png';

import Call from '../images/phone-call.png';
import Mail from '../images/mail.png';
import { useState } from "react";

function Give() {
    const [showDetails, setShowDetails] = useState(false)

  return (
    <>
        <div className="give" id="give">
            <div className='love-text' id="location">
                <h1>Celebrating Together</h1><img src={Hearts} />
            </div>
            <div className="account">
                <p>We are incredibly grateful for your presence as we embark on this journey together. Your love and support mean the world to us. While your presence is the greatest gift, if you wish to contribute in another way, we would be honored by your support.</p>
                <div className="show" onClick={() => setShowDetails(!showDetails)}><p>Cash Gifts</p><img src={Gift} /></div>
                {/* {showDetails ?  */}
                    <>
                    <h2><strong>Account Details:</strong> <br /> Account Number: 2274248791
                    <br /> Account Name: Apara Tunmise Samuel <br />Bank: Uba </h2><br /><h2><strong>OR:</strong> <br /> Account Number: 2274248791
                    <br /> Account Name: Grace Akowe <br />Bank: Zenith </h2><br /><h2><strong>DOLLAR ACCOUNT:</strong> <br /> Account Number: 2303154213 <br ></br> <strong>SWIFT Code:</strong> UNAFNGLA 
                    <br /> Account Name: Grace Akowe <br />Bank: Zenith </h2></>
                    {/* : <></>
                } */}
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
