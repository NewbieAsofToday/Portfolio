import React from "react";
import "./info.css";
import image from "../../../assets/coding.gif";
import SocialContact from "../../common/social-contact";
const About = () => {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-photo'>
          <img src={image} className='picture' />
        </div>
        <div className='about-info'>
          <div class='containerr'>
            <p className='my-details'>
              Since I was a kid I was always interested and curious about
              computers. I am constantly learning more about web development and
              I'm aiming to be a full stack dev.
            </p>
            <p className='my-details'>
              The technologies I'm currently learning are
              <strong> NextJS, material-ui</strong> and some concepts like
              authentication and state management systems.
            </p>
          </div>
        </div>
      </div>
      <SocialContact />
    </div>
  );
};

export default About;
