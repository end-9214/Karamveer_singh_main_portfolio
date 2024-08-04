import './navbar.scss';
import React from 'react';

const Navbar = () => {
    return(
       <header className='header'>
            <a href='/' className='logo'>Karamveer Singh</a>

        <nav className="navbar">
            <a href='/'>Home</a>
            <a href='/'>About</a>
            <a href='/'>Projects</a>
            <a href='/'>Hobbies</a>
            <a href='/'>Contact</a>
        </nav>
       </header>
    )
}

export default Navbar;