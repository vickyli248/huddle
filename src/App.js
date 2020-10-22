import React, { useEffect } from 'react';
// import { Router } from '@reach/router';

import './App.css';

import Demo from './components/Demo';
import Landing from './components/Landing';
import Valuepage from './components/Valuepage'

function App() {
	var scroll =
		window.requestAnimationFrame ||
		function (callback) {
			window.setTimeout(callback, 1000 / 60);
		};

	var elementsToShow = document.querySelectorAll('.show-on-scroll');
	function loop() {
		elementsToShow.forEach(function (element) {
			if (isElementInViewport(element)) {
				element.classList.add('is-visible');
			}
			if (isElementInDelayedViewport(element)) {
				element.classList.add('is-delayed-visible');
			}
			if (isAtTop(element)) {
				element.classList.add('is-at-top');
			}
			if (isAtBottom(element)) {
				element.classList.remove('is-at-top');
			}
		});
		scroll(loop);
	}
	function isAtTop(el) {
		var rect = el.getBoundingClientRect();
		return rect.y <= 170;
	}
	function isAtBottom(el) {
		var rect = el.getBoundingClientRect();
		return rect.top >= 170;
	}
	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
			(rect.top <= 0 && rect.bottom >= 0) ||
			(rect.bottom >=
				(window.innerHeight || document.documentElement.clientHeight) &&
				rect.top <=
					(window.innerHeight || document.documentElement.clientHeight)) ||
			(rect.top >= 0 &&
				rect.bottom <=
					(window.innerHeight || document.documentElement.clientHeight))
		);
	}
	function isElementInDelayedViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
			(rect.top <= 0 && rect.bottom >= 0) ||
			(rect.bottom >=
				(window.innerHeight || document.documentElement.clientHeight) &&
				rect.top <=
					(window.innerHeight || document.documentElement.clientHeight)) ||
			(rect.top >= 0 &&
				rect.bottom <=
					(window.innerHeight - 600 ||
						document.documentElement.clientHeight - 600))
		);
	}
	loop();

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
