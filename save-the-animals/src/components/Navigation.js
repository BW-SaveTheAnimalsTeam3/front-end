import React from 'react';
import { Link } from 'react-router-dom';



export default function Navigation() {


    return (
        <div>
            <ul className="nav-list">
                <Link to='/' className='menu-item'>Dashboard</Link>
                <Link to='organization' className='menu-item'>Profile</Link>
                <Link to='/' className='menu-item'>Log Out</Link>
            </ul>
        </div>
    )
}
