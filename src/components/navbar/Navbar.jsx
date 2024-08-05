import './navbar.scss';
import React from 'react';

const Navbar = ({ scrollToSection }) => {
    return (
        <header className='header'>
            <a href='/' className='logo'>KARAMVEER SINGH</a>
            <nav className="navbar">
                <button onClick={() => scrollToSection('Home')}>Home</button>
                <button onClick={() => scrollToSection('About')}>About</button>
                <button onClick={() => scrollToSection('Education')}>Education</button>
                <button onClick={() => scrollToSection('Projects')}>Projects</button>
                <button onClick={() => scrollToSection('Hobbies')}>Hobbies</button>
                <button onClick={() => scrollToSection('Contact')}>Contact</button>
            </nav>
        </header>
    );
}

export default Navbar;
