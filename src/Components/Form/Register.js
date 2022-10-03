import React from 'react';

const Register = () => {
    return(
        <form action="submit">
            <div className="field">
                <label htmlFor="fname">First name</label>
                <input type="text" />
            </div>
            <div className="field">
                <label htmlFor="lname">Last name</label>
                <input type="text" />
            </div>
            <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" />
            </div>
            <div className="field">
                <label htmlFor="password">Password</label>
                <input type="password" />
            </div>
            <div className="field">
                <label htmlFor="password">Confirm password</label>
                <input type="password" />
            </div>
        </form>
    )
}

export default Register;

