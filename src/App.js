import React, { useEffect } from 'react';
import { Router } from '@reach/router';

import './App.css';

import Demo from './components/Demo';
import Landing from './components/Landing';

function App() {
	return (
		<div className="App">
			<Router>
				<Landing path="/" />
				<Demo path="/demo" />
			</Router>
		</div>
	);
}

export default App;
