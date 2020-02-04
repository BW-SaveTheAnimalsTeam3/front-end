import React, { useState } from 'react'

// USED FOR SUPPORTERS WITH EXISTING LOGIN CREDENTIALS

const SupporterLogin = (props) => {
    const [supporterLogin, setSupporterLogin] = useState({
        email: '',
        password: ''
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        setSupporterLogin({ ...supporterLogin, [e.target.name]: e.target.value })
        console.log(supporterLogin);
    }

    const handleChanges = (e) => {
        e.preventDefault();
        setSupporterLogin({ ...supporterLogin, [e.target.name]: e.target.value })
    }



    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="email"></label>
            <input type="email" placeholder="email" name="email" onChange={handleChanges} value={supporterLogin.email} required />
            <label htmlFor="password"></label>
            <input type="password" placeholder="password" name="password" onChange={handleChanges} value={supporterLogin.password} required />
            <button>Sign In</button>
        </form>
    )
}

export default SupporterLogin;