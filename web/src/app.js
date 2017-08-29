import React from 'react';
import ReactDOM from 'react-dom';
import Person from './person/person';
import './app.css';

function App(){

    return (
        <div className="container">
            <div>
                <Person />
            </div>
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('app'));