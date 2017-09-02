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
        this.associateInput = this.associateInput.bind(this);
    }

    request(){
        console.log(this.state);
        Http.post("http://localhost:3000/person", this.state).then((response) => {
            this.setState({
                result : JSON.parse(response)
            });
        });
    }

    associateInput(event){    
        const object = {};
        object[event.target.dataset.field] = event.target.value;    
        console.log(object);
        this.setState(object);
    }

    render(){
        return PersonRender(this);
    }
}




