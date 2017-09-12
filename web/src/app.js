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
                        <Route path='/search' component={Person}/>
                        <Route path='/update' component={Person}/>
                        <Route path='/delete' component={Person}/>
                        <Route render={() => {return (<h1>Welcome to the Person Manager app, here you can make opearations over your favorite person, enjoy!</h1>)}}/>
                    </Switch>
                </div>
            </div>
        )
    }

})