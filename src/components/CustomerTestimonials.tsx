import React, { useState } from "react";
import "./CustomerTestimonials.css";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "דוד כהן",
    role: "מנהל פרויקט",
    company: 'חברת בנייה בע"מ',
    text: "השירות היה מעולה! הצוות המקצועי התקין את הפיגומים במהירות ובבטיחות. ממליץ בחום.",
    rating: 5,
    image: "👨‍💼",
  },
  {
    id: 2,
    name: "רחל לוי",
    role: "אדריכלית",
    company: "סטודיו אדריכלות",
    text: "הפיגומים סיפקו פתרון מושלם לפרויקט הבנייה שלנו. המקצועיות והשירות היו מעולים.",
    rating: 5,
    image: "👩‍💼",
  },
  {
    id: 3,
    name: "יוסף אברהם",
    role: "קבלן",
    company: "קבלן עצמאי",
    text: "עובד איתם כבר שנים. תמיד מספקים שירות מקצועי ואמין. הפיגומים איכותיים ובטוחים.",
    rating: 5,
    image: "👨‍🏗️",
  },
];

const CustomerTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>מה הלקוחות אומרים</h2>
        <div className="testimonials-content">
          <button className="nav-button prev" onClick={prevTestimonial}>
            ❮
          </button>
          <div className="testimonial-card">
            <div className="testimonial-image">
              {testimonials[currentIndex].image}
            </div>
            <div className="testimonial-text">
              <p className="quote">"{testimonials[currentIndex].text}"</p>
              <div className="rating">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <div className="testimonial-author">
                <h3>{testimonials[currentIndex].name}</h3>
                <p>
                  {testimonials[currentIndex].role} -{" "}
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
          <button className="nav-button next" onClick={nextTestimonial}>
            ❯
          </button>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
