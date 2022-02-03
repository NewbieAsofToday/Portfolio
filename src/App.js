import "./App.css";
import React from "react";
import Home from "./components/home";
function App() {
  const mybutton = document.querySelector(".back-top");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  return (
    <div className='App'>
      <Home />
      <a href='#header' className='back-top'>
        {/* <p>back to top</p> */}
        <i class='fi fi-rr-caret-up grow'></i>
      </a>
    </div>
  );
}

export default App;
