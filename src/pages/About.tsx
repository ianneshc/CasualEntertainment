import React, { useEffect, useState, useMemo } from "react";
import NavBar from "../components/NavBar";
import SocialNetwork from "../components/SocialNetwork";
import Footer from "../components/Footer";
import FirstImage from "../assets/Images/carousel (1).webp";
import SecondImage from "../assets/Images/carousel (2).webp";
import ThirdImage from "../assets/Images/carousel (3).webp";
import FourthImage from "../assets/Images/carousel (4).webp";
import PlanningImage from "../assets/Images/Planning.webp";
import "../styles/About.css";

const AboutPage = () => {
  const images = useMemo(
    () => [FirstImage, SecondImage, ThirdImage, FourthImage, PlanningImage],
    []
  );
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const preloadImages = () => {
      for (let i = 0; i < images.length; i++) {
        const img = new Image();
        img.src = images[i];
      }
    };
    preloadImages();

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target as HTMLImageElement;
          lazyImage.src = lazyImage.dataset.src || "";
          lazyImage.classList.remove("lazy");
          intersectionObserver.unobserve(lazyImage);
        }
      });
    };

    const intersectionObserver = new IntersectionObserver(handleIntersection, options);
    const imagesToBeObserved = document.querySelectorAll(".lazy");
    imagesToBeObserved.forEach((image) => intersectionObserver.observe(image as Element));

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      intersectionObserver.disconnect();
    };
  }, [images]);

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
              data-src={image}
              alt={`Reforma de Hogar - Imagen ${index + 1}`}
              className="carousel-img lazy"
              loading="lazy"
              srcSet={`${image} 1920w, ${image} 1280w, ${image} 640w`}
            />
          ))}
        </div>
      </section>
      <section className="differencesContainer">
        <div className="differences">
          <h1 className="differencesTitle">¿Por qué nosotros?</h1>
          <p className="differencesSub">
            Dejamos que usted sea el protagonista en todo momento en el proceso de
            transformación de su hogar. Nos encargamos de dar forma a sus ideas
            acompañándole en todo el proceso de la elección de elementos y
            materiales que definan su propia personalidad y los adaptamos a sus
            necesidades. Calidad, precio y compromiso son nuestros principios.
            Sumamos todo esto para obtener nuestro principal elemento
            diferenciador.
          </p>
          <img
            src={PlanningImage}
            alt="A man with a book in his hands"
            className="planningImage"
            loading="lazy"
            width="1920"
            height="1080"
          />
        </div>
      </section>
      <section className="socialMedia">
        <div className="socialMedia">
          <h2 className="mediaTitle">Nuestras redes sociales</h2>
          <div className="socialLinks">
            <SocialNetwork
              socialNetwork="Instagram"
              businessTag="@eeepersonality"
              whereTo="https://www.instagram.com/eeepersonality/"
            />
            <SocialNetwork
              socialNetwork="Facebook"
              businessTag="@casualentertainment"
              whereTo="https://www.facebook.com/casualentertainmentreformas/"
            />
          </div>
        </div>
      </section>
      <section className="footer">
        <Footer />
      </section>
    </main>
  );
};

export default AboutPage;
