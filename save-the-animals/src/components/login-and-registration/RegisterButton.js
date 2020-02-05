import React from 'react'
import { Link } from 'react-router-dom';

// DISPLAYED ON LOGIN PAGES
// ROUTES TO REGISTRATION PAGES IF USER NEEDS TO CREATE AN ACCOUNT


const Register = () => {


    return (
        <div>
            <h2>Don't have an account?</h2>
            <Link to="/register">Register Here</Link>
        </div>
    )
}

export default Register;