import React from "react";
import "./body.css";
import About from "./about/index";
import Projects from "./projects/index";
import Skills from "./skills/index";
import Contact from "./contact/index";
import Info from "./info/index";

const Body = () => {
  return (
    <div className='body'>
      <section id='about'>
        <About />
      </section>
      <section id='about'>
        <Info />
      </section>
      <section id='project'>
        <Projects />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </div>
  );
};

export default Body;
