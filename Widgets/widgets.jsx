import React from 'react';
import ReactDOM from 'react-dom';
import Root from './lib/Root.jsx';

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
	ReactDOM.render(<Root/>, main);
});
