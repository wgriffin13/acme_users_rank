import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import { Provider } from 'react'

const app = document.querySelector('#app');
ReactDOM.render(
    <Router>
        <App />
    </Router>, app
    );
