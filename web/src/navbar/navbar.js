import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default function NavBar() {

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
                            <li><a href="#"><Link to='/search'>Search</Link></a></li>                       
                            <li><a href="#"><Link to='/register'>Register</Link></a></li>                       
                            <li><a href="#"><Link to='/update'>Update</Link></a></li>                       
                            <li><a href="#"><Link to='/delete'>Delete</Link></a></li>                       
                        </ul>
                    </div>
                </div>       
            </nav>
        </div>         
    );

}
