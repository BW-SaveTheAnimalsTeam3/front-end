import React, { useState } from 'react'


const OrgLogin = (props) => {
    const [organization, setOrganization] = useState({
        email: '',
        password: ''
    });






    return (

        <form>
            <label htmlFor="email"></label>
            <input type="email" placeholder="email" />
            <label htmlFor="password"></label>
            <input type="password" placeholder="password" />
            <button>Sign In</button>
        </form>
    )
}

export default OrgLogin;