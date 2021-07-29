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

import { FaAngleDoubleRight } from 'react-icons/fa'

const Footer = () => {
  return (
    <Container>
      <SocialMedias>
        <p>Social Medias</p>
        <LinksMedia>
          <Link href=''>
            <FaTwitter />
          </Link>
          <Link href=''>
            <FaYoutube />
          </Link>
          <Link href=''>
            <FaGithub />
          </Link>
          <Link href=''>
            <FaInstagram />
          </Link>
          <Link href=''>
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
