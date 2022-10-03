import React from 'react';

const Input = (props) => {
    return(
        <div className="field">
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}

export default Input