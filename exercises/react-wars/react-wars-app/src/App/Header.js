import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className='header'>
            <h2>Welcome</h2>
            <h2>To The</h2>
            <h1>Star Wars</h1>
            <h2>API</h2>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
        </div>
    )
}

export default Header;