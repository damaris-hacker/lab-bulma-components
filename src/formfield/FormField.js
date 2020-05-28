import React, {Component} from "react";
import 'bulma/css/bulma.css';

function FormField (props)  {

    return (

        <div className="field">
        <label className="label">{props.label}</label>


        <div className="control">

          <input className="input" type={props.text} placeholder={props.placeholder} />
        </div>


      </div>

    )
}

export default FormField;