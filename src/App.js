import React, { useEffect } from 'react';
// import { Router } from '@reach/router';

import './App.css';

import Demo from './components/Demo';
import Landing from './components/Landing';
import Valuepage from './components/Valuepage'

function App() {
	return (
		<div className="App">
			<Landing />
			<Demo />
			<Valuepage title="I LIKE MEN" color = "green" background="filler"/>
			<Valuepage title="meet me by the bean" color="orange"/>
		</div>
	);
}

export default App;
