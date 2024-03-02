import { useEffect, useState } from 'react';
import {
	Outlet,
  Link

} from "react-router-dom";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Navigation from '../images/Navigation.png';
import DismissCircle from '../images/DismissCircle.png';


const Menu = (sidebar) => {

    return (
        <div className="mobile-navg">
            <div className='mobile-nav-items'>
                <Link to='#'>Home</Link>
                <Link to='#story'>Our Story</Link>
                <Link to='#location'>Location</Link>
                <Link to='#give'>Give</Link>
                <Link to='#contact'>Contact</Link>
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
                    <Link to='/'>Home</Link>
                    <Link to='#story'>Our Story</Link>
                    <Link to='#location'>Location</Link>
                    <Link to='#give'>Give</Link>
                    <Link to='#footer'>Contact</Link>
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
                <Menu sidebar={sidebar}  />
            </div>
        }
    </div>
        
	);
}

export default Navbar;