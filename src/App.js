import React, { useEffect } from 'react';
// import { Router } from '@reach/router';

import "./hero.css"

import Hero from './components/Hero';
import Valuepage from './components/Valuepage'

import GreenSVG from './img/BackgroundSVG/GreenSVG.svg'
import OrangeSVG from './img/BackgroundSVG/OrangeSVG.svg'
import BlueSVG from './img/BackgroundSVG/BlueSVG.svg'

function App() {
	return (
		<div className="App">
			<Hero />
			<p className = "subtitle">Forget everything you know about virtual interactions. We’re here to redefine it.</p>
			<Valuepage
				title="break out of rooms"
				bodyText="Huddle is designed to allow the fluidity of real social interactions, online. 
						Freely flow between huddles to hop between different conversations and activities."
				color="green"
				backgroundImg={GreenSVG}
			/>
			<Valuepage
				title="stay connected to everyone"
				bodyText="Seeing everyone in the global view makes the entire space feel shared. 
						Overhear conversations and hop between then, just as you would in real life.  "
				color="orange"
				// backgroundImg={OrangeSVG}
			/>
			<Valuepage
				title="engage in shared experiences"
				bodyText="Drag and drop games, tools and media to enhance the traditional video chat experience past screen sharing. 
						Have customized activities for every event."
				color="blue"
				// backgroundImg={BlueSVG}
			/>
		</div>
	);
}

export default App;
