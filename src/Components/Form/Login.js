import React from 'react';
import Logo from '../../utils/Logo';
import './form.css';

const Login = () => {
    return(
        <div className='login-container'>
            <Logo/>
            <h1 className="heading">👌Welcome Back!</h1>
            <form action="submit">
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Your Email'/>
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter password'/>
                </div>
                <div className="register-cta">
                <button type='submit'>Login</button>
                <p><a href='/'>Don't have an account? SIGN UP</a></p>
                </div>
            </form>
        </div>
    )
}


export default Login;