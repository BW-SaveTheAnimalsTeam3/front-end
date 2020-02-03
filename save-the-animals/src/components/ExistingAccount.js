import React from 'react'
import { Link } from 'react-router-dom';

const ExistingAccount = () => {


    return (
        <div>
            <h2>Already Have An Account?</h2>
            <Link to='/'>Login Here</Link>
        </div>
    )
}

export default ExistingAccount;