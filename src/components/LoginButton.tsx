import React from 'react';
import '../styles/LoginButton.css';

function LoginButton() {
    return(
        <div className='buttonContainer'>
            <a href="/bonjour" className='loginButtonText'>Entrar</a>
        </div>
    )
}

export default LoginButton