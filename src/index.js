import React from 'react';
import ReactDOM from 'react-dom';

import {  BrowserRouter as Router  } from 'react-router-dom'


import './index.css'
import reportWebVitals from './reportWebVitals';
import App from './App';

const routing= (
  <Router>
    <App />
  </Router>
);



ReactDOM.render(routing, document.getElementById("root"));


reportWebVitals();
