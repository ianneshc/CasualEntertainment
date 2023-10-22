import React from 'react';
import '../styles/BackButton.css';

interface Props {
    onClick: () => void;
    className?: string;
}

const BackButton: React.FC<Props> = ({ onClick }) => {
    return(
        <button className='backButtonContainer' onClick={onClick}>
            <span className='backButtonText'>Volver al inicio</span>
        </button>
    )
}

export default BackButton;