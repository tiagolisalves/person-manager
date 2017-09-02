import React from 'react';
import ReactDOM from 'react-dom';

export default function NavBar(props) {

    return (
        <div>
            <br />
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">                   
                        <a className="navbar-brand" href="#">Person Manager</a>
                    </div> 
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Search</a></li>                       
                            <li><a href="#">Register</a></li>                       
                            <li><a href="#">Update</a></li>                       
                            <li><a href="#">Delete</a></li>                       
                        </ul>
                    </div>
                </div>       
            </nav>
        </div>         
    );

}
