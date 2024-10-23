/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../style.css';
import { Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';

const Navbars = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleOpenSidebar = () =>setShowSidebar(true);
  const handleCloseSidebar = () =>setShowSidebar(false);
 
  return (
    <>
        <nav>
            <div className='row main'>
            <div className='col mt-2'>
                <div className='anchorStyle paddingNavbar'>All</div>
            </div>
            <div className='col mt-2'>
                <a href="/" className='anchorStyle paddingNavbar'>MX Player</a>
            </div>
            <div className='col mt-2'>
                <a href="/book2" className='anchorStyle paddingNavbar'>Sell</a>
            </div>
            <div className='col mt-2'>
                <a href="/book3" className='anchorStyle paddingNavbar'>Best Sellers</a>
            </div>
            <div className='col mt-2'>
                <a href="/review" className='anchorStyle paddingNavbar'>Today's Deals</a>
            </div>
            <div className='col mt-2'>
                <a href="/review" className='anchorStyle paddingNavbar'>Mobiles</a>
            </div>
            <div className='col mt-2'>
                <a href="/review" className='anchorStyle paddingNavbar'>Electronics</a>
            </div>
            {/* <div className='col mt-2'>
                <a href="/review" className='anchorStyle paddingNavbar'>Home & Kitchen</a>
            </div> */}
            <div className='col mt-2'>
                <a href="/review" className='anchorStyle paddingNavbar'>Prime</a>
            </div>
            {/* <div className='col mt-2'>
                <a href="/review" className='anchorStyle paddingNavbar'>Customer Service</a>
            </div> */}
            </div>
      </nav>

    </>
  )
}

export default Navbars