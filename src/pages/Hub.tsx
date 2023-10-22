import React, { useState, useEffect } from 'react';
import HubNavBar from '../components/HubNavBar';
import ContactRequest from '../components/ContactRequest';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

function Hub() {
    const [contactRequests, setContactRequests] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDocs(collection(db, "contactForms"));
            setContactRequests(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };

        fetchData();
    }, []);

    return (
        <div>
            <HubNavBar></HubNavBar>
            <h1>Tus solicitudes de contacto</h1>
            <section className='contactRequests'>
                {contactRequests.map((contact: any) => (
                    <ContactRequest
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        surname={contact.surname}
                        email={contact.email}
                        phone={contact.phone}
                        details={contact.details}
                        toDelete={contact.id} // Pasamos el id a toDelete
                    />
                ))}
            </section>
        </div>
    );
}

export default Hub;