import React from 'react';
import '../styles/LogoutButton.css';

interface Props {
    onClick: () => void;
    className?: string;
}

const LogoutButton: React.FC<Props> = ({ onClick }) => {
    return(
        <button className='loginButtonContainer' onClick={onClick}>
            <span className='loginButtonText'>Salir</span>
        </button>
    )
}

export default LogoutButton;