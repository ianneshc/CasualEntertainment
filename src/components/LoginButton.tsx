import React from 'react';
import '../styles/LoginButton.css';

interface Props {
    className?: string;
}

const LoginButton: React.FC<Props> = () => {
    return(
        <div className='loginButtonContainer'>
            <a href="/bonjour" className='loginButtonText'>Entrar</a>
        </div>
    )
}

export default LoginButton