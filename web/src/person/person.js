import React from 'react';
import Rx from 'rxjs';
import Http from '../http';
import './person.css';
import PersonRender from './person.render.js';

export default class Person extends React.Component {

    constructor(props){
        super(props);        
        this.state = {
            name : undefined,
            age : undefined,
            address : undefined,
            sex : undefined
        }
        this.request = this.request.bind(this);
        this.setGeneralInfo = this.setGeneralInfo.bind(this);
    }

    request(){
        Http.post("http://localhost:3000/person", this.state).then((response) => {
            this.setState({
                result : JSON.parse(response)
            });
        });
    }

    setGeneralInfo(event){    
        this.setState({[event.target.dataset.field] : event.target.value});
    }

    render(){
        return PersonRender(this);
    }
}




