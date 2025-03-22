import React, { useState, useEffect } from "react";
import "./ProjectCarousel.css";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "מגדל מגורים בתל אביב",
    description: "התקנת פיגומים למגדל מגורים בן 30 קומות",
    image: "🏢",
  },
  {
    id: 2,
    title: "מרכז מסחרי בירושלים",
    description: "פתרון פיגומים למרכז מסחרי חדש",
    image: "🏪",
  },
  {
    id: 3,
    title: "מפעל תעשייתי בנתיבות",
    description: "התקנת פיגומים למפעל תעשייתי",
    image: "🏭",
  },
  {
    id: 4,
    title: "שיפוץ מבנה היסטורי",
    description: "פיגומים לשיפוץ מבנה היסטורי",
    image: "🏛️",
  },
];

const ProjectCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="project-carousel">
      <div className="carousel-container">
        <h2>פרויקטים נבחרים</h2>
        <div className="carousel-content">
          <button className="nav-button prev" onClick={prevSlide}>
            ❮
          </button>
          <div className="carousel-slide">
            <div className="slide-image">{projects[currentIndex].image}</div>
            <div className="slide-content">
              <h3>{projects[currentIndex].title}</h3>
              <p>{projects[currentIndex].description}</p>
            </div>
          </div>
          <button className="nav-button next" onClick={nextSlide}>
            ❯
          </button>
        </div>
        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
