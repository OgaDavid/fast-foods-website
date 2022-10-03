import React from 'react';
import './form.css'
import Logo from '../../utils/Logo';
import Input from '../../utils/Input';
import registerData from '../../Data/RegisterData';

const Register = () => {

    function input(input) {
        return(
            <Input
                key={input.id}            
                label={input.label}
                placeholder={input.placeholder}
                type={input.type}
                htmlFor={input.htmlFor}
            />
        )
    }
    return(
        <div className="register-container">
            <Logo/>
            <h1 className="heading">👋 Welcome to Fast foods</h1>
            <form action="submit">
                {registerData.map(input)}
                <div className="register-cta">
                    <button type='submit'>Sign up</button>
                    <p><a href='/'>Already have an account? LOGIN</a></p>
                </div>
            </form>
        </div>
    )
}

export default Register;
