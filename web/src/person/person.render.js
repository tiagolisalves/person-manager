import React from 'react';

export default function(context){
    return (
            <div className="">
                <GeneralInfo handleChange={context.associateInput} />
                <input value='Register' onClick={context.request}  className="btn btn-primary pull-right mt-md" type="button"/>                          
            </div>
        )
}

function GeneralInfo(props){

    return (
        <form action="">
            <fieldset>
                <legend>General Info</legend>                
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="person-name" data-field="name" className="form-control" onChange={props.handleChange}/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="person-address">Address</label>
                        <input type="text" id="person-address" data-field="address" className="form-control" onChange={props.handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor="person-age">Age:</label>
                        <input type="text" id="person-age" data-field="age" className="form-control" onChange={props.handleChange}/>
                    </div>
                    <div className="col-md-3" >
                        <label htmlFor="person-sex">Sex</label>
                        <select className="form-control" data-field="sex" id="person-sex" onChange={props.handleChange}>
                            <option className="hide"></option>
                            <option>Male</option>
                            <option>Female</option>                          
                        </select>
                    </div>
                </div>
            </fieldset>
        </form>
    );
}