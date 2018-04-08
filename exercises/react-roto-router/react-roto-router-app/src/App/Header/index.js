import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <nav>
                    <Link to='/'>HOME</Link>
                    <Link to='/about'>ABOUT</Link>
                    <Link to='/services'>SERVICES</Link>
            </nav>
            <h1>Rusty Plumbing Experts</h1>
            <main></main>
        </div>
    )
}

export default Header;
