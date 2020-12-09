import React from 'react';
import ReactDOM from 'react-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './index.css';
import { App } from './view/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ParallaxProvider scrollAxis="vertical">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ParallaxProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
