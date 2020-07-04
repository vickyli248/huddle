import React from 'react';

import './App.css';

import PurpleGradPattern from './img/purple-gradient-pattern.png';
import LandingHeadline from './img/landing-headline.png';
import HeaderDemo from './img/header-demo.png';
import Logo from './img/logo.png';
import VideoDimensionsHeadline from './img/video-dimensions.png';
import GreenGradPattern from './img/green-gradient-pattern.png';

function App() {
	return (
		<div>
			<div className="header">
				<div className="navbar">
					<img src={Logo} className="logo show-on-scroll" alt="Logo" />
					<div className="navigation show-on-scroll">
						<a className="nav-link" href="#">
							About
						</a>
						<a className="nav-link" href="#">
							Sign Up
						</a>
					</div>
				</div>

				<img
					src={PurpleGradPattern}
					className="background-gradient purple"
					alt="Purple Gradient"
				/>

				<img
					src={LandingHeadline}
					className="landing-headline show-on-scroll"
					alt="Tagline"
				/>

				<img
					src={HeaderDemo}
					className="header-demo show-on-scroll"
					alt="Header Demo"
				/>
			</div>
			<div className="video-dimensions">
				<img
					src={VideoDimensionsHeadline}
					className="video-dimensions-headline show-on-scroll"
					alt="Video Dimensions"
				/>
				<img
					src={GreenGradPattern}
					className="background-gradient"
					alt="Green Gradient"
				/>
			</div>
		</div>
	);
}

export default App;
