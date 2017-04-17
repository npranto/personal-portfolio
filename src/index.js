import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './style.css';
import App from './app/App.component.jsx';

ReactDOM.render(
    <Router>
        <Route path="/" component={App}/>
    </Router>
    , document.getElementById('app')
)

