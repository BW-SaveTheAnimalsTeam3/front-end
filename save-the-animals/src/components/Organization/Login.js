import React, { useState } from 'react'
import ExistingAccount from '../ExistingAccount';


const OrgLogin = (props) => {
    const [organization, setOrganization] = useState({
        email: '',
        password: ''
    });






    return (

        <div>
            <form>
                <label htmlFor="email"></label>
                <input type="email" placeholder="email" />
                <label htmlFor="password"></label>
                <input type="password" placeholder="password" />
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default OrgLogin;