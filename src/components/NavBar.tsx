import React from 'react';
//import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Logo from '../logo.svg';
import '../styles/NavBar.css';

function NavBar() {
    const navigate = useNavigate();
    /*
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }
    navigate('/login');
  };
  */

  return (
    <header className="container">
      <img className="logo" src={Logo} alt="logo" />
      <nav className="links">
        <div className='text-links'>
          <a href="/">Inicio</a>
          <a href="/about">Sobre nosotros</a>
          <a href="/">Contacto</a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;