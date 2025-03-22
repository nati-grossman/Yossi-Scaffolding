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
          <button className="primary-button">קבל הצעת מחיר חינם</button>
          <button className="secondary-button">למידע נוסף</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
