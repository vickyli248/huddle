import React from 'react';
// import { Link } from '@reach/router';

import '../css/landing.css';

import PurpleGradPattern from '../img/purple-gradient-pattern.png';
import LandingHeadline from '../img/landing-headline.png';
import HeaderDemo from '../img/header-demo.png';
import Logo from '../img/logo.png';

function Landing() {
	return (
		<div>
			<div className="header">
				<div className="navbar">
					<img src={Logo} className="logo show-on-scroll" alt="Logo" />
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
		</div>
	);
}

export default Landing;
