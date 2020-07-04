import React from 'react';

import './App.css';

import PurpleGrad from './img/purple-gradient.png';
import LandingHeadline from './img/landing-headline.png';
import HeaderDemo from './img/header-demo.png';
import Logo from './img/logo.png';


function App() {
  return (
    <div>
      <div className="header">
        <div className="navbar">
          <img src={Logo} className="logo show-on-scroll" alt="Logo"/>
          <div className="navigation show-on-scroll">
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Sign Up</a>
          </div>
        </div>

        <img src={PurpleGrad} className="purple-gradient" alt="Purple Gradient"/>

        <img src={LandingHeadline} className="landing-headline show-on-scroll" alt="Tagline"/>

        <img src={HeaderDemo} className="header-demo show-on-scroll" alt="Header Demo"/>
      </div>
    </div>
    
  );
}
    

export default App;
