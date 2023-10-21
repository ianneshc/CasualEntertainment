import React from 'react';
import '../styles/Footer.css'

const currentYear  = new Date().getFullYear();

function Footer() {
    return(
        <div className="footerContainer">
          <p className="copyright">© {currentYear} Casual Entertainment. Todos los derechos reservados.</p>
        </div>
    );
}

export default Footer;