import React, { useState } from 'react';


const OrgLogin = (props) => {
    const [organization, setOrganization] = useState({
        email: '',
        password: ''
    });






    return (

        <div>
            <form>
                <label htmlFor="email"></label>
                <input type="email" placeholder="email" required />
                <label htmlFor="password"></label>
                <input type="password" placeholder="password" required />
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default OrgLogin;