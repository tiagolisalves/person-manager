import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar/navbar';
import { Switch, Route } from 'react-router-dom';
import Person from './person/person';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default React.createClass({
    render(){
        
        return (
            <div className="container">
                <div>
                    <NavBar />            
                </div>                
                <div className="jumbotron">
                    <Switch>
                        <Route path='/register' component={Person}/>
                        <Route render={() => {return (<div>I'm a Person</div>)}}/>
                    </Switch>
                </div>
            </div>
        )
    }

})