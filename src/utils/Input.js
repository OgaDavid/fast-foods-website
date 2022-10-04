import React from 'react';

const Input = (props) => {

    const regex = "/[a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}/ig"
    return(
        <div className="field">
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input pattern={regex} type={props.type} placeholder={props.placeholder}/>
            <span>{props.errorMsg}</span>
        </div>
    )
}

export default Input