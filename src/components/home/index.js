import React from "react";
import Body from "../body";
import Footer from "../footer";
import "./home.css";
import Header from "../header";
import "./back-to-top.css";
const Home = () => {
  return (
    <div className='home'>
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
