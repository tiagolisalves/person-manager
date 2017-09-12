import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, hashHistory, Switch} from 'react-router-dom';
import App from './app';
import Person from './person/person';


ReactDOM.render(
(<Router>
   <App/>
</Router>), document.getElementById('app'));