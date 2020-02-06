import React from 'react';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router'



export default function Navigation() {
    const history = useHistory();

const logout = () => {
    localStorage.clear('token');
    history.push('/')
}

    return (
        <div>
            <ul className="nav-list">
                <a href="https://savetheanimalsweb28.netlify.com/" className="menu-item">Home</a>
                <Link to='/organization' className='menu-item'>Dashboard</Link>
                <Link to='organization' className='menu-item'>Profile</Link>
                {/* <Link to='/' className='menu-item'>Log Out</Link> */}
                <button onClick={logout} className='menu-item'>Log Out</button>
            </ul>
        </div>
    )
}
