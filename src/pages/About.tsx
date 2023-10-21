import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SocialNetwork from "../components/SocialNetwork";
import Footer from "../components/Footer";

import FirstImage from "../assets/Images/carousel (1).jpg";
import SecondImage from "../assets/Images/carousel (2).jpg";
import ThirdImage from "../assets/Images/carousel (3).jpg";
import FourthImage from "../assets/Images/carousel (4).jpg";

import PlanningImage from "../assets/Images/Planning.jpg";

import "../styles/About.css";

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
      <h1 className="aboutWelcome" tabIndex={0}>
        Sobre Nosotros
      </h1>
      <p className="mainSub">
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
              className="carousel-img"
            />
          ))}
        </div>
      </section>
      <section className="differencesContainer">
        <div className="differences">
          <h1 className="differencesTitle">¿Porqué nosotros?</h1>
          <p className="differencesSub">
          Dejamos usted sea el protagonista en todo momento en el proceso de  transformación de su hogar. Nos encargamos de dar forma a sus ideas acompañándole en todo el proceso de la elección de elementos y materiales que definan su propia personalidad y los adaptamos a sus necesidades. Calidad, precio y compromiso son nuestros principios. Sumamos todo esto para obtener nuestro principal elemento diferenciador.
          </p>
          <img src={ PlanningImage } alt="A man with a book in his hands" className="planningImage" />
        </div>
      </section>
      <section className="socialMedia">
        <div className="socialMedia">
          <h2 className="mediaTitle">Nuestras redes sociales</h2>
          <div className="socialLinks">
            <SocialNetwork socialNetwork="Instagram" businessTag="@eeepersonality" whereTo="https://www.instagram.com/eeepersonality/"></SocialNetwork>
            <SocialNetwork socialNetwork="Facebook" businessTag="@casualentertainment" whereTo="https://www.facebook.com/casualentertainmentreformas/"></SocialNetwork>
          </div>
        </div>
      </section>
      <section className="footer">
        <Footer></Footer>
      </section>
    </main>
  );
};

export default AboutPage;
