import React from 'react'

import {
  Container,
  NameLink,
  SocialMedias,
  LinksMedia,
  Copyright,
  Link
} from './Footer.styled'

import { 
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <SocialMedias>
        <p>Social Media</p>
        <LinksMedia>
          <Link href='https://twitter.com/MoscosoMaxi'>
            <FaTwitter />
          </Link>
          <Link href='https://www.youtube.com/channel/UCZKCL_YUKV4ComQ83yXDhvA'>
            <FaYoutube />
          </Link>
          <Link href='https://github.com/MoscosoMaximiliano'>
            <FaGithub />
          </Link>
          <Link href='https://www.instagram.com/maxi_moscoso/?hl=es'>
            <FaInstagram />
          </Link>
          <Link href='https://www.linkedin.com/in/maximiliano-moscoso-773155181/'>
            <FaLinkedinIn />
          </Link>
        </LinksMedia>
      </SocialMedias>
      <Copyright>
        <p>Made with ♥ by</p>
        <NameLink
          href='https://github.com/MoscosoMaximiliano/CV-React'
          target='noreferrer'
        >
          <strong>Maxi Moscoso</strong>
        </NameLink>
      </Copyright>
    </Container>
  )
}

export default Footer
