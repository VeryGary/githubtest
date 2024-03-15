import "./resources/global.css";
import "./resources/hamburger";
import Hamburger from "./resources/hamburger";
import React, { useState } from 'react';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>

      <div class="nav-bar-mobile">
        <div class="hamburger" onClick={toggleMenu}>
          <Hamburger />
        </div>
      </div>
      
      <div className={`drop-down-menu ${isMenuOpen ? 'show' : ''}`}>
        <ul>
          <li>Home</li>
          <li>Subscribers</li>
          <li>About</li>
        </ul>
      </div>
 
      <div class="nav-bar-not-mobile">
        <ul>
          <li>Home</li>
          <li>Subscribers</li>
          <li>About</li>
        </ul>
      </div>
      <div class="wrapper">
        <div class="content">
          <h1>Main Title</h1>
          <p>Sample text to test scrolling.Sample text to test scrolling.Sample text to test scrolling.
            Sample text to test scrolling.Sample text to test scrolling.Sample text to test scrolling.
            Sample text to test scrolling.Sample text to test scrolling.Sample text to test scrolling.
            Sample text to test scrolling.Sample text to test scrolling.Sample text to test scrolling.
            Sample text to test scrolling.Sample text to test scrolling.Sample text to test scrolling.
            Sample text to test scrolling.Sample text to test scrolling.Sample text to test scrolling.
            Sample text to test scrolling.Sample text to test scrolling.Sample text to test scrolling.
            Sample text to test scrolling.Sample text to test scrolling.Sample text to test scrolling.
            Sample text to test scrolling.Sample text to test scrolling.Sample text to test scrolling.
            Sample text to test scrolling.Sample text to test scrolling.Sample text to test scrolling.
            Sample text to test scrolling.Sample text to test scrolling.Sample text to test scrolling.
            Sample text to test scrolling.Sample text to test scrolling.Sample text to test scrolling.
            Sample text to test scrolling.Sample text to test scrolling.Sample text to test scrolling.
            Sample text to test scrolling.Sample text to test scrolling.Sample text to test scrolling.
            </p>
          </div>
      </div>
    </>
  )
}

export default App
