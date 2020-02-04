import React, { useState } from 'react'

// USED FOR SUPPORTERS WITH EXISTING LOGIN CREDENTIALS

const SupporterLogin = (props) => {
    const [organization, setOrganization] = useState({
        email: '',
        password: ''
    });


    const submitForm = (e) => {
        e.preventDefault();
        console.log('working');
    }



    return (

        <form onSubmit={submitForm}>
            <label htmlFor="email"></label>
            <input type="email" placeholder="email" required />
            <label htmlFor="password"></label>
            <input type="password" placeholder="password" required />
            <button>Sign In</button>
        </form>
    )
}

export default SupporterLogin;