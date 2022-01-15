import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id='header' className='header'>
      <div className='logo'>AzkFolio</div>
      <div className='menu'>
        <div className='web-menu'>
          <Web />
        </div>
        <div className='mobile-menu'>
          <div onClick={() => setIsOpen(!isOpen)}>
            <i className='fi fi-rr-apps menu-icon'></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
