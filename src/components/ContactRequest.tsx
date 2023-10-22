import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

import '../styles/ContactRequest.css';

interface Props {
    name: string;
    surname: string;
    email: string;
    phone: string;
    details: string;
    toDelete: string;
    id: string; // Agregamos la propiedad id a la interfaz Props
}

interface ToolProps {
    className?: string;
    name: string;
    id: string;
    onClick: (id: string) => void;
}

const ContactRequest: React.FC<Props> = ({ name, surname, email, phone, details, toDelete, id }) => {
    const handleDelete = async () => {
        console.log("Removing from firestore...");
        await deleteDoc(doc(db, "contactForms", id));
    };
    
    return (
        <div className='requestContainer'>
            <p className='personName'>{name}</p>
            <p className='personSurname'>{surname}</p>
            <p className='personPhone'>{phone}</p>
            <p className='personEmail'>{email}</p>
            <p className='description'>{details}</p>
            <div className='controls'>
                <ContactAction name="Eliminar" onClick={handleDelete} id={toDelete}></ContactAction>
            </div>
        </div>
    );
};

const ContactAction: React.FC<ToolProps> = ({ name, id, onClick }) => {
    const handleClick = () => {
        onClick(id);
    };
    return (
        <button className='actionContainer' onClick={handleClick}>
            <span className='actionText'>{name}</span>
        </button>
    );
};

export default ContactRequest;
