import React from "react";
import "./social-contact.css";
import facebook from "../../../assets/icons/facebook.png";
import twitter from "../../../assets/icons/twitter.png";
import github from "../../../assets/icons/github.png";
import linkedin from "../../../assets/icons/linkedin.png";
const SocialContact = () => {
  return (
    <div className='social-contact'>
      <a href='https://facebook.com'>
        <div className='social-icon-div'>
          <img src={facebook} alt='logo' className='social-icon' />
        </div>
      </a>
      <a href='https://facebook.com'>
        <div className='social-icon-div'>
          <img src={twitter} alt='logo' className='social-icon' />
        </div>
      </a>
      <a href='https://facebook.com'>
        <div className='social-icon-div'>
          <img src={github} alt='logo' className='social-icon' />
        </div>
      </a>
      <a href='https://facebook.com'>
        <div className='social-icon-div'>
          <img src={linkedin} alt='logo' className='social-icon' />
        </div>
      </a>
    </div>
  );
};

export default SocialContact;
