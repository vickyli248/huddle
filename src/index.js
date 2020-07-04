import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

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
        });
        scroll(loop);
      }
      function isElementInViewport(el) {
        // special bonus for those using jQuery
      
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
      loop();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
