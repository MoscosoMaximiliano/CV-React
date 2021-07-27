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
    cName: 'nav-text'
  },
  {
    title: 'Knowledge',
    path: '/knowledge',
    icon: <VscExtensions />,
    cName: 'nav-text'
  },
  {
    title: 'Portfolio',
    path: '/portfolio',
    icon: <VscSymbolColor />,
    cName: 'nav-text'
  },
  {
    title: 'Aptitudes',
    path: '/aptitudes',
    icon: <VscThumbsup />,
    cName: 'nav-text'
  },
  {
    title: 'Experiences',
    path: '/experiences',
    icon: <VscWatch />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Me',
    path: '/contact',
    icon: <VscCommentDiscussion />,
    cName: 'nav-text'
  }
];
export const MediaLinks = [
  {
    link: 'https://twitter.com/MoscosoMaxi',
    icon: <FaTwitter/>,
    cName: 'socialMediaIcon'
  },
  {
    link: 'https://twitter.com/MoscosoMaxi',
    icon: <FaYoutube/>,
    cName: 'socialMediaIcon'
  },
  {
    link: 'https://twitter.com/MoscosoMaxi',
    icon: <FaGithub/>,
    cName: 'socialMediaIcon'
  },
  {
    link: 'https://twitter.com/MoscosoMaxi',
    icon: <FaInstagram/>,
    cName: 'socialMediaIcon'
  },
  {
    link: 'https://twitter.com/MoscosoMaxi',
    icon: <FaLinkedinIn/>,
    cName: 'socialMediaIcon'
  }
]