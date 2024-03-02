import { useEffect, useState } from 'react';
import {
	Outlet,
  Link

} from "react-router-dom";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Navigation from '../images/Navigation.png';
import DismissCircle from '../images/DismissCircle.png';


const Menu = ({showSidebar}) => {

    return (
        <div className="mobile-navg">
            <div className='mobile-nav-items'>
                <a href='#' onClick={showSidebar}>Home</a>
                <a href='#story' onClick={showSidebar}>Our Story</a>
                <a href='#location' onClick={showSidebar}>Location</a>
                <a href='#give' onClick={showSidebar}>Give</a>
                <a href='#contact' onClick={showSidebar}>Contact</a>
            </div>
        </div>
    )
}

const Navbar = () => {
    

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        console.log(' for navigation');
        setSidebar(!sidebar);

    } 



	return (
    <div className='navbar'> 
        <div className='the-nav'>
            <div className='nav-elmt'>
                <div className='nav-title'>
                    <p>Grace & Tunmise</p>
                </div>
                
                <div className='nav-links'>
                    <a href='#'>Home</a>
                    <a href='#story'>Our Story</a>
                    <a href='#location'>Location</a>
                    <a href='#give'>Give</a>
                    <a href='#footer'>Contact</a>
                </div>                    

                {!sidebar ?
                    <div className='hidden-scr mobile-nav' onClick={showSidebar}>
                        <img src={Navigation} className='' alt='Nav' />
                    </div>
                    :
                    <div className='hidden-scr mobile-nav' onClick={showSidebar}>
                        <img src={DismissCircle} className='' alt='Dismiss' />
                    </div>
                }
            </div>
        </div>
        {!sidebar ? 
            <div className=''>
            </div> :
            <div className=''>
                <Menu sidebar={sidebar} showSidebar={showSidebar} setSidebar={setSidebar} onClick={showSidebar} />
            </div>
        }
    </div>
        
	);
}

export default Navbar;