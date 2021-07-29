import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarData, MediaLinks } from './sideBarData'
import './Navbar.css'

function SideBar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
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
        <li>
          <p className="footer-p">Made with ♥ by
            <strong>
              <a href='https://github.com/MoscosoMaximiliano/CV-React' target="noreferrer"> Maxi Moscoso</a>
            </strong>
          </p>
        </li>
      </ul>
    </nav>
  )
}


export default SideBar
