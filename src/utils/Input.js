import React from 'react';
import { useState } from 'react';

const Input = (props) => {

    const [focused, setFocused] = useState(false);
    return(
        <div className="field">
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input pattern={props.pattern} type={props.type} placeholder={props.placeholder} onBlur={() =>{setFocused(true)}} focused={focused.toString()}/>
            <span>{props.errorMsg}</span>
        </div>
    )
}

export default Input