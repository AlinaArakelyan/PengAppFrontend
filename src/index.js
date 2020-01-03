import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
=======

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> 81024071ad5d2901939e37511b7b0f8cfb599d98

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
