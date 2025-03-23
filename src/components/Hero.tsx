import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>פיגומים איכותיים, בטוחים ומקצועיים לכל פרויקט!</h1>
        <p className="subheadline">
          הפתרונות שלנו לכל פרויקט בנייה – מהירים, בטוחים ומקצועיים
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="hero-button">
            <span className="button-content">צור קשר</span>
            <span className="button-icon">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
