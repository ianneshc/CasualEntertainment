import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../logo.svg';
import '../styles/NavBar.css';

function NavBar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="container">
            <img className="logo" src={Logo} alt="logo" />
            <nav className={`links ${isMenuOpen ? 'active' : ''}`}>
                <div className='text-links'>
                    <a href="/">Inicio</a>
                    <a href="/about">Sobre nosotros</a>
                    <a href="/contact">Contacto</a>
                </div>
            </nav>
            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className={`line ${isMenuOpen ? 'line-1' : ''}`}></div>
                <div className={`line ${isMenuOpen ? 'line-2' : ''}`}></div>
                <div className={`line ${isMenuOpen ? 'line-3' : ''}`}></div>
            </div>
            {isMenuOpen && (
                <div className="side-panel">
                    <a href="/">Inicio</a>
                    <a href="/about">Sobre nosotros</a>
                    <a href="/contact">Contacto</a>
                </div>
            )}
        </header>
    );
}

export default NavBar;
