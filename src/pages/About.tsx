import React, { useEffect, useState } from "react";
import "../styles/About.css";
import NavBar from "../components/NavBar";

import FirstImage from "../assets/Images/carousel (1).jpg";
import SecondImage from "../assets/Images/carousel (2).jpg";
import ThirdImage from "../assets/Images/carousel (3).jpg";
import FourthImage from "../assets/Images/carousel (4).jpg";

const AboutPage: React.FC = () => {
  const images = [FirstImage, SecondImage, ThirdImage, FourthImage];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="about-page">
      <NavBar />
      <h1 className="welcome">Sobre Nosotros</h1>
      <p className="subWelcome">
        En Casual Entertainment, nos dedicamos a transformar hogares en espacios
        extraordinarios y funcionales que reflejan la esencia de cada cliente.
        Nuestro enfoque meticuloso en cada detalle y nuestra pasión por el
        diseño excepcional nos distinguen en el mundo de la reforma de hogares.
        Permita que nuestros expertos guíen el proceso y hagan realidad su
        visión de un hogar único y distinguido.
      </p>
      <section className="carousel-container">
        <div
          className="carousel"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Reforma de Hogar - Imagen ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
