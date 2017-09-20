import React from 'react';
import Rx from 'rxjs';
import Http from '../http';

export default class PersonList extends React.Component {
    
        constructor(props){
            super(props);       
            this.state = {
                rows : undefined,
                cols : undefined
            }
            this.request();            
            this.request = this.request.bind(this);
        }
    
        request(){
            Http.get("http://localhost:3000/person").then((response) => {                
                this.setState({
                    columns: Object.keys(JSON.parse(response)[0]),
                    rows: JSON.parse(response)                    
                });
            });
        }        
    
        render(){
            var columns = this.state.columns && this.state.columns.map((header, index) => {                 
                return (<th key={'col'.concat(index)}>{header.replace(/^./,header[0].toUpperCase())}</th>)
            });

            var rows = this.state.rows && this.state.rows.map((row, index) => {
                return (
                    <tr key={'row'.concat(index)}>
                        <td>{row.name}</td>
                        <td>{row.age}</td>
                        <td>{row.address}</td>
                        <td>{row.sex}</td>
                    </tr>
                )
            });

            return (
                <table className="table">
                    <thead>
                        <tr>
                            {columns}
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            )
        }
        
    }
    
    