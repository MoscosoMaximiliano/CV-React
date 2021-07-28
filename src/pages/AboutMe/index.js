import React from 'react';
import './style.css'
import profilePic from '../../assets/profile1.png'

function AboutMe() {
  return (
    <div className="contentPage aboutMe">
      <div className="content">
        <h1>Hi, I'm Moscoso Maximiliano</h1>
        <h3>Unity Programmer <strong>|</strong> Game Designer</h3>
        <h3>React Developer</h3>

        <p>Born in Río Grande, Tierra Del Fuego, Argentina. 23 years old. Currently studying software development. 
          4 years of experience in Unity and 6 years of experience in general programming.</p>
        
      </div>
      <div className="photo">
        <img src={profilePic} alt="Image Profile"></img>
      </div>
    </div>
  );
}

export default AboutMe;