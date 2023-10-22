import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

import { db } from '../firebase';

import "../styles/Contact.css";

import "../styles/Contact.css";



const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
        const docRef = await addDoc(collection(db, "contactForms"), {
            name: formData.firstName,
            surname: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            description: formData.message
        });
        console.log("Written with ID: ", docRef.id);
        navigate('/success');
        
    } catch (error) {
        console.error("Error adding document: ", error);
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <body>
      <NavBar></NavBar>
      <section className="contactWelcome">
        <h1 className="contactTitle">Contacta con nosotros</h1>
      </section>
      <section className="contactForm">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>
              Nombre:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Apellidos:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Correo:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Número de teléfono:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Mensaje:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </section>
    </body>
  );
};

export default Contact;
