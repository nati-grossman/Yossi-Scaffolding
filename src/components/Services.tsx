import React from "react";
import "./Services.css";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "הקמת פיגומים",
    description:
      "הקמת פיגומים מקצועיים לכל סוגי המבנים, כולל פיגומים לגובה, פיגומים למבני מגורים ומבני תעשייה",
    icon: "🏗️",
  },
  {
    id: 2,
    title: "שירותי תחזוקה",
    description:
      "תחזוקה שוטפת של פיגומים, בדיקות תקופתיות, תיקונים והחלפת חלקים פגומים",
    icon: "🔧",
  },
  {
    id: 3,
    title: "התקנת מערכות בטיחות",
    description:
      "התקנת מערכות בטיחות מתקדמות, כולל רשתות הגנה, מעקות ומערכות תאורה",
    icon: "🛡️",
  },
  {
    id: 4,
    title: "ייעוץ מקצועי",
    description:
      "ייעוץ מקצועי בבחירת סוג הפיגום המתאים, תכנון והתאמה לצרכים הספציפיים של כל פרויקט",
    icon: "💡",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2>השירותים שלנו</h2>
        <p className="services-description">
          אנו מספקים פתרונות פיגומים מקיפים לכל סוגי הפרויקטים
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
