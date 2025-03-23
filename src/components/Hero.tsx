import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-image">
        <img
          src="/images/projects/Scaffolding.jpg"
          alt="Professional Scaffolding"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1>גרוסמן פיגומים</h1>
        <p className="subheadline">
          פיגומים איכותיים, בטוחים ומקצועיים לכל פרויקט!
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="hero-button">
            <span className="button-content">צור קשר</span>
            <span className="button-icon">←</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
