import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// USED FOR ORGANIZATIONS WITH EXISTING LOGIN CREDENTIALS

const OrgLogin = (props) => {
    const [orgLogin, setOrgLogin] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setOrgLogin({ ...orgLogin, [e.target.name]: e.target.value })
        console.log(orgLogin);
    }


    const handleChanges = (e) => {
        setOrgLogin({ ...orgLogin, [e.target.name]: e.target.value })
    }



    return (

        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email"></label>
                <input type="email" name="email" placeholder="email" onChange={handleChanges} value={orgLogin.email} required />
                <label htmlFor="password"></label>
                <input type="password" name="password" placeholder="password" onChange={handleChanges} value={orgLogin.password} required />
                <button><Link to='/organization'>Sign In</Link></button>
            </form>
        </div>
    )
}

export default OrgLogin;