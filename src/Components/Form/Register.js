import React from 'react';
import './form.css'
import Logo from '../../utils/Logo';

const Register = () => {
    return(
        <div className="register-container">
            <Logo/>
            <h1 className="heading">👋 Welcome to Fast foods</h1>
            <form action="submit">
                <div className="field">
                    <label htmlFor="fname">First name</label>
                    <input type="text" placeholder='Your first name'/>
                </div>
                <div className="field">
                    <label htmlFor="lname">Last name</label>
                    <input type="text" placeholder='Your last name'/>
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Your Email'/>
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter password'/>
                </div>
                <div className="field">
                    <label htmlFor="password">Confirm password</label>
                    <input type="password" placeholder='Confirm password'/>
                </div>
                <div className="register-cta">
                <button type='submit'>Sign up</button>
                <p><a href='/'>Already have an account? LOGIN</a></p>
                </div>
            </form>
        </div>
    )
}

export default Register;

