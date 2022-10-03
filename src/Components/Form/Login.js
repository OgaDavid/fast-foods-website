import React from 'react';
import Logo from '../../utils/Logo';
import './form.css';
import loginData from '../../Data/LoginData';
import Input from '../../utils/Input';

const Login = () => {

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
        <div className='login-container'>
            <Logo/>
            <h1 className="heading">👌Welcome Back!</h1>
            <form action="submit">
                {loginData.map(input)}
                <div className="register-cta">
                    <button type='submit'>Login</button>
                    <p><a href='/'>Don't have an account? SIGN UP</a></p>
                </div>
            </form>
        </div>
    )
}


export default Login;