import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = ()=>{
    return (
        <div>
            <ul>
                <li>
                <Link to='/register'>register</Link>
                </li>
                <li>
                <Link to='/login'>Login</Link>
                </li>
                <li>
                <Link to='/secret'>hidden</Link>
                </li>
                <li>
                <Link to='/link'>share link</Link>
                </li>
            </ul>
            
            
            
        </div>
    )
}