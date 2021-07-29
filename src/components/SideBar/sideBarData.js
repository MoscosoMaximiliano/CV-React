import React from 'react';

import { 
  VscAccount, 
  VscCommentDiscussion, 
  VscExtensions, 
  VscSymbolColor, 
  VscWatch, 
  VscThumbsup  
} from "react-icons/vsc";

import { 
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

export const SidebarData = [
  {
    title: 'About Me',
    path: '/',
    icon: <VscAccount />,
    cName: 'navbar-buttons'
  },
  {
    title: 'Knowledge',
    path: '/knowledge',
    icon: <VscExtensions />,
    cName: 'navbar-buttons'
  },
  {
    title: 'Portfolio',
    path: '/portfolio',
    icon: <VscSymbolColor />,
    cName: 'navbar-buttons'
  },
  {
    title: 'Aptitudes',
    path: '/aptitudes',
    icon: <VscThumbsup />,
    cName: 'navbar-buttons'
  },
  {
    title: 'Experiences',
    path: '/experiences',
    icon: <VscWatch />,
    cName: 'navbar-buttons'
  },
  {
    title: 'Contact Me',
    path: '/contact',
    icon: <VscCommentDiscussion />,
    cName: 'navbar-buttons'
  }
];
export const MediaLinks = [
  {
    link: 'https://twitter.com/MoscosoMaxi',
    icon: <FaTwitter/>,
    cName: 'navbar-socialMediaIcon'
  },
  {
    link: 'https://www.youtube.com/channel/UCZKCL_YUKV4ComQ83yXDhvA',
    icon: <FaYoutube/>,
    cName: 'navbar-socialMediaIcon'
  },
  {
    link: 'https://github.com/MoscosoMaximiliano',
    icon: <FaGithub/>,
    cName: 'navbar-socialMediaIcon'
  },
  {
    link: 'https://www.instagram.com/maxi_moscoso/?hl=es',
    icon: <FaInstagram/>,
    cName: 'navbar-socialMediaIcon'
  },
  {
    link: 'https://www.linkedin.com/in/maximiliano-moscoso-773155181/',
    icon: <FaLinkedinIn/>,
    cName: 'navbar-socialMediaIcon'
  }
]