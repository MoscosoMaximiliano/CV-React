import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarData, MediaLinks } from './sideBarData'
import './Navbar.css'

function Navbar () {
  return (
    <nav className='nav-menu active'>
      <ul className='nav-menu-items'>
        <div className='socialMedias'>
          <span>Social Medias</span>
          <ul className='socialMediaLinks'>
            {MediaLinks.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.link} target='noreferrer'>
                    {item.icon}
                  </a>
                </li>
              )
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
          )
        })}
      </ul>
      <p className="footer-p">Made with ♥ by <strong><a href='https://github.com/MoscosoMaximiliano/CV-React' target="noreferrer">Maxi Moscoso</a></strong></p> 
    </nav>
  )
}

export default Navbar
