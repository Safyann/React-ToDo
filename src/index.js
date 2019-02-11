import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import bootstrap from 'bootstrap';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'
import 'icheck/skins/all.css';
import './index.css';



ReactDOM.render(
    <BrowserRouter>{routes}</BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
