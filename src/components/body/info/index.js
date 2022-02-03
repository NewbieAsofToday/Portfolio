import React from "react";
import styled from "styled-components";
import Seperator from "../../common/seperator";
import image from "../../../assets/coding.gif";

const index = () => {
  return (
    <>
      <Seperator />
      <div className='section-title'>About Me</div>
      <AboutMe>
        <p>
          Since I was a kid I was always interested and curious about computers.
          I am constantly learning more about web development and some of the
          technologies I'm currently learning are <strong>NextJS</strong>,
          <strong>GraphQL</strong> and I also want to learn more about BackEnd
          Development
        </p>
        <div className='about-photo'>
          <img src={image} className='picture' />
        </div>
      </AboutMe>
    </>
  );
};
const AboutMe = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .section-title {
    font-size: 32px;
    font-weight: 700;
  }
`;
export default index;
