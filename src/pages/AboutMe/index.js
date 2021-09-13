import React from 'react';
import profilePic from '../../assets/profile1.png'

import { AboutMeS, Header, Description, Photo } from './aboutMe.styled'

import moment from 'moment'

function AboutMe() {
  const GetDate = (date) => {
    let today = moment().format('yyyy')
    return today - date
  }


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
          <p>
            Born in Río Grande, Tierra Del Fuego, Argentina.
            &nbsp;{GetDate(1997)} years old.
            Currently studying software development.
            &nbsp;{GetDate(2019)} years of experience in Unity and
            &nbsp;{GetDate(2018)} years of experience in general programming.</p>
        </Description>
      </AboutMeS>
  );
}

export default AboutMe;