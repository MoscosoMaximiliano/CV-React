import React from 'react';
import profilePic from '../../assets/profile1.png'

import {AboutMeS, Header, Description, Photo} from './aboutMe.styled'

function AboutMe() {
  return (
    <AboutMeS>
      <Header>
        <h1>Hi, I'm Moscoso Maximiliano</h1>
        <h3>Unity Programmer <strong>|</strong> Game Designer</h3>
        <h3>React Developer</h3>
      </Header>
      <Description>
        <Photo>
          <img
            src={profilePic}
            alt="Maximiliano Moscoso Face"
          />
        </Photo>
        <p>Born in Río Grande, Tierra Del Fuego, Argentina. 23 years old. Currently studying software development.
          4 years of experience in Unity and 6 years of experience in general programming.</p>
      </Description>
    </AboutMeS>
  );
}

export default AboutMe;