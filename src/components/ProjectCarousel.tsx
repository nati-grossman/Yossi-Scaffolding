import React, { useState, useEffect } from "react";
import "./ProjectCarousel.css";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "מגדל משרדים מודרני",
    description: "בניית מגדל משרדים בן 30 קומות עם תכנון מודרני ומערכות חכמות",
    image:
      "https://images.unsplash.com/photo-1486406146923-c433d7b6b3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "#",
  },
  {
    id: 2,
    title: "מרכז מסחרי",
    description: "הקמת מרכז מסחרי חדשני עם אזורי בילוי ופנאי",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
    link: "#",
  },
  {
    id: 3,
    title: "מתחם מגורים יוקרתי",
    description: "בניית מתחם מגורים יוקרתי עם גינות ופארקים",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "#",
  },
];

const ProjectCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % projects.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section className="project-carousel">
      <div className="project-carousel-container">
        <h2>הפרויקטים שלנו</h2>
        <div className="carousel">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`carousel-slide ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="carousel-image"
              />
              <div className="carousel-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="carousel-button">
                  לפרטים נוספים
                </a>
              </div>
            </div>
          ))}
          <button className="carousel-nav carousel-prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="carousel-nav carousel-next" onClick={nextSlide}>
            &#10095;
          </button>
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
