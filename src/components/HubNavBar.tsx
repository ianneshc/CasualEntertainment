import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import Logo from '../logo.svg';
import '../styles/NavBar.css';
import LogoutButton from './LogoutButton';

function HubNavBar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleLogout() {
        const auth = getAuth();
        signOut(auth).then(() => {
            navigate('/');
        })
    }

    return (
        <header className="container">
            <img className="logo" src={Logo} alt="logo" />
            <nav className={`links ${isMenuOpen ? 'active' : ''}`}>
                <div className='text-links'>
                    <a href="/">Inicio</a>
                    <a href="/about">Sobre nosotros</a>
                    <a href="/contact">Contacto</a>
                </div>
                <LogoutButton className="navBarButton" onClick={handleLogout}></LogoutButton>
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

export default HubNavBar;
