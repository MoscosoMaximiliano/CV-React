import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {SidebarData, MediaLinks} from './sideBarData';
import './Navbar.css';


import { VscArrowSmallRight, VscClose } from "react-icons/vsc";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bars-arrow'>
          <VscArrowSmallRight onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' >
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars' onClick={showSidebar}>
              <VscClose />
            </Link>
          </li>

          <div className='socialMedias'>
            <span>Social Medias</span>
            <ul className='socialMediaLinks'>
            {MediaLinks.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <a href={item.link}>{item.icon}</a>
              </li>
            );
          })}
            </ul>
          </div>

          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;