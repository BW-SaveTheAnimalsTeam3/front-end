import React from 'react'
import { Link } from 'react-router-dom';

// DISPLAYED ON REGISTRATION PAGES
// ROUTES TO LOGIN PAGE IF USER HAS EXISTING ACCOUNT

const ExistingAccount = () => {


    return (
        <div className="change-form">
            <h2>Already Have An Account?</h2>
            <Link to='/'>Login Here</Link>
        </div>
    )
}

export default ExistingAccount;