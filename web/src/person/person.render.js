import React from 'react';

export default function(context){

    const result = context.state.result && 
                    <table>
                        <thead>
                        <tr>
                            {Object.keys(JSON.parse(context.state.result)).map(function(key, index, element, ele) {
                                return (<th key={key + index}>
                                    {key}
                                </th>)
                            })}
                        </tr>
                        </thead>
                        <tbody>

                        <tr>
                            {Object.values(JSON.parse(context.state.result)).map(function(value, index){
                                return (
                                <td key={value + index}>
                                    {value}
                                </td>
                                )
                            })}
                        </tr>
                        </tbody>
                    </table>
                ;


    return (
            <div className="form">
                <InputText align="placeASide" label="Name:" field="name" handleChange={context.associateInput}/>
                <InputText align="placeASide" label="Age:" field="age" handleChange={context.associateInput}/>
                <InputText align="placeASide" label="Address:" field="address" handleChange={context.associateInput}/>
                <InputText align="placeASide" label="Sex:" field="sex" handleChange={context.associateInput}/>                
                <input value='Add Person' onClick={context.request}  className="button right" type="button"/>
                {result}
                
            </div>
        )
}

function InputText(props){

    return (
        <div className="input-box">
            <div className="input-label">
                {props.label}
            </div>
            <div className="input-text">
                <input type="text" data-field={props.field} onChange={props.handleChange} />
            </div>
        </div>    
    );
}