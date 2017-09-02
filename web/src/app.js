import React from 'react';
import ReactDOM from 'react-dom';
import Person from './person/person';
import NavBar from './navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App(){

    return (
        <div className="container">
            <div>
                <NavBar />            
            </div>                
            <div className="jumbotron">
                <Person />
            </div>
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('app'));