import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

import { Shell } from './App';
import Routes from './Routes';

import './styles/app.css';

axios.defaults.baseURL = 'https://lms20180225101429.azurewebsites.net';
// axios.defaults.headers.common.Authorization = 'Bearer Wfe1AqDVLmLwsLHEp491J_e-COUrwLo4a3tn4O4b-xm1jGpyUD4Uc-U3Ea0VkK6amMacgKU6NHRssNJLUUvB1Am42P5Fy6pjDSAgxTn3ufkzL2ELl9asV0vcWwHDTofa_h02-xUlaX_FZhFfZ4p51tPHBV8RBLvxnJypuKCnFNmmmsz_6SwtZV3_VT2NKJfn_qHztrpfNLEWfOPdKOVf18tlC-GoQU-3v9ihjCkhdsA';

const App = () => {
  return (
    <Router>
      <Shell>
        <Routes />
      </Shell>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
