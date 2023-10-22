import React from 'react';
import NavBar from '../components/NavBar';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import '../styles/ContactSuccess.css'

function ContactSuccess() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/');
    }

    return(
        <body className='contactSuccessBody'>
            <div className='contactSuccesContainer'>
                <NavBar></NavBar>
                <h1 className='thanksMessage'>Gracias por ponerte en contacto con nosotros.</h1>
                <h2 className='subThankMessage'>Un miembro de nuestro equipo se pondrá en contacto contigo lo antes posible.</h2>
                <div className='centerButton'>
                <BackButton className='returnButton' onClick={handleClick}></BackButton>
                </div>
            </div>
            <section className='footer'>
            
            </section>
        </body>
    );
}

export default ContactSuccess;