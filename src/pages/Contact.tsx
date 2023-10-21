import React from 'react';
import NavBar from '../components/NavBar';

import '../styles/Contact.css';

function Contact() {
    return (
        <div>
            <NavBar></NavBar>
            <section className='contactWelcome'>
                <h1 className='contactTitle'>Contacta con nosotros</h1>
            </section>
        </div>
    )
}

export default Contact;