import React from "react";
import "./about.css";
import image from "../../../assets/coding.png";
import SocialContact from "../../common/social-contact";
const About = () => {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
          Hello There <span class='wave'>👋</span>, I am <br />
          <div class='containerr'>
            <div class='row'>
              <div class='col-md-12 text-center'>
                <p class='animate-charcter'>Euger</p>
              </div>
            </div>
          </div>
          I love experimenting with the web.
        </div>
        <div className='about-photo'>
          <img src={image} className='picture' />
        </div>
      </div>
      <SocialContact />
    </div>
  );
};

export default About;
