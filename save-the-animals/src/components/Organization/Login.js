import React, { useState } from 'react';

// USED FOR ORGANIZATIONS WITH EXISTING LOGIN CREDENTIALS

const OrgLogin = (props) => {
    const [organization, setOrganization] = useState({
        email: '',
        password: ''
    });


    const submitForm = (e) => {
        e.preventDefault();
        console.log('working');
    }



    return (

        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="email"></label>
                <input type="email" name="email" placeholder="email" required />
                <label htmlFor="password"></label>
                <input type="password" name="password" placeholder="password" required />
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default OrgLogin;